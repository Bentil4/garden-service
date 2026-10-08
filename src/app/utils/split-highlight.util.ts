import { HighlightedTextParts } from '../shared/models/highlighted-text.model';

export function splitHighlight(text: string, highlight = ''): HighlightedTextParts {
  const start = highlight ? text.indexOf(highlight) : -1;
  if (start === -1) {
    return { before: text, highlight: '', after: '' };
  }
  return {
    before: text.slice(0, start),
    highlight,
    after: text.slice(start + highlight.length),
  };
}
