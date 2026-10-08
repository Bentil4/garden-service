import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { ContactService } from '../../core/contact.service';
import { SubmitStatus } from '../../shared/models/submit-status.model';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    HlmButtonImports,
    HlmFieldImports,
    HlmInputImports,
    HlmLabelImports,
    HlmTextareaImports,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private readonly contactService = inject(ContactService);
  private readonly formBuilder = inject(FormBuilder).nonNullable;

  protected readonly status = signal<SubmitStatus>('idle');

  protected readonly form = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    await this.sendMessage();
  }

  private async sendMessage(): Promise<void> {
    this.status.set('submitting');
    try {
      await this.contactService.sendMessage(this.form.getRawValue());
      this.form.reset();
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }
}
