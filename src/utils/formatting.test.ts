import { decapitalizeFirstChart } from "./formatting";

describe('decapitalizeFirstChart', () => {
  test('"Test" should become "test"', () => {
    expect(decapitalizeFirstChart('Test')).toBe('test');
  });

  test('empty string will not be changed', () => {
    expect(decapitalizeFirstChart('')).toBe('');
  });
});
