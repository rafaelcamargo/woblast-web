import rangeService from './range';

describe('Range Service', () => {
  it('should build stringified number range', () => {
    const range = rangeService.buildStringifiedNumberRange(1, 4);
    expect(range).toEqual(['1', '2', '3', '4']);
  });
});
