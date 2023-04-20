import { formatFeedDate } from './timeUtils';

describe('Pruebas en timeUtils', () => {
  test('Pruebas en timeUtils', () => {
   const date = new Date('2022-12-09T06:34:25.607Z');
   const formatDate = formatFeedDate(date);

    expect(formatDate).toBe('9 de Diciembre, 2022');
  });
});
