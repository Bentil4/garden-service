import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactService } from '../../core/contact.service';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  let fixture: ComponentFixture<ContactForm>;
  let root: HTMLElement;
  const sendMessage = vi.fn().mockResolvedValue({});

  beforeEach(async () => {
    sendMessage.mockClear();
    TestBed.configureTestingModule({
      providers: [{ provide: ContactService, useValue: { sendMessage } }],
    });
    fixture = TestBed.createComponent(ContactForm);
    await fixture.whenStable();
    root = fixture.nativeElement as HTMLElement;
  });

  function fill(id: string, value: string): void {
    const control = root.querySelector<HTMLInputElement>('#' + id)!;
    control.value = value;
    control.dispatchEvent(new Event('input'));
  }

  function submit(): void {
    root.querySelector('form')!.dispatchEvent(new Event('submit'));
  }

  it('does not send an invalid message', async () => {
    submit();
    await fixture.whenStable();
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it('sends a valid message and shows a success status', async () => {
    fill('contact-full-name', 'Ada Lovelace');
    fill('contact-email', 'ada@example.com');
    fill('contact-message', 'I would like a quote please.');
    submit();
    await fixture.whenStable();
    expect(sendMessage).toHaveBeenCalledWith({
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'I would like a quote please.',
    });
    expect(root.querySelector('[role=status]')?.textContent).toContain(
      'Your message has been sent',
    );
  });
});
