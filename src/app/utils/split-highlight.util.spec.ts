import { splitHighlight } from './split-highlight.util';

describe('splitHighlight', () => {
  it('splits text around the highlighted phrase', () => {
    expect(
      splitHighlight('Caring For Your Private Plants, Our Expertise', 'Private Plants'),
    ).toEqual({
      before: 'Caring For Your ',
      highlight: 'Private Plants',
      after: ', Our Expertise',
    });
  });

  it('returns the whole text as "before" when there is no highlight', () => {
    expect(splitHighlight('Lawn Care')).toEqual({ before: 'Lawn Care', highlight: '', after: '' });
  });

  it('returns the whole text as "before" when the phrase is not found', () => {
    expect(splitHighlight('Lawn Care', 'Tree').before).toBe('Lawn Care');
  });
});
