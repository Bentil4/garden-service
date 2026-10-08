import { TestBed } from '@angular/core/testing';
import { IconCardItem } from '../../shared/models/icon-card-item.model';
import { IconCard } from './icon-card';

describe('IconCard', () => {
  const item: IconCardItem = {
    id: 'garden-design',
    iconSrc: 'icons/services/trowel.svg',
    title: 'Garden Design',
    highlight: 'Design',
    description: 'Plans for every garden.',
  };

  function render(value: IconCardItem): HTMLElement {
    const fixture = TestBed.createComponent(IconCard);
    fixture.componentRef.setInput('item', value);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders the title with the highlighted phrase and the description', () => {
    const root = render(item);
    expect(root.querySelector('h3')?.textContent).toBe('Garden Design');
    expect(root.querySelector('h3 span')?.textContent).toBe('Design');
    expect(root.querySelector('p')?.textContent).toContain('Plans for every garden.');
  });

  it('marks the icon as decorative', () => {
    expect(render(item).querySelector('img')?.getAttribute('alt')).toBe('');
  });
});
