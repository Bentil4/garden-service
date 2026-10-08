import { TestBed } from '@angular/core/testing';
import { HighlightedText } from './highlighted-text';

describe('HighlightedText', () => {
  function render(text: string, highlight?: string): HTMLElement {
    const fixture = TestBed.createComponent(HighlightedText);
    fixture.componentRef.setInput('text', text);
    fixture.componentRef.setInput('highlight', highlight);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('keeps the original spacing around the highlighted phrase', () => {
    const root = render('Garden Design now', 'Design');
    expect(root.textContent).toBe('Garden Design now');
    expect(root.querySelector('span')?.textContent).toBe('Design');
  });

  it('renders plain text when nothing is highlighted', () => {
    expect(render('Lawn Care').textContent).toBe('Lawn Care');
  });
});
