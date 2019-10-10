import baseResource from '@scripts/base/resources/base/base';
import financeResource from './finance';

describe('Finance Resource', () => {
  beforeEach(() => {
    baseResource.get = jest.fn();
  });

  it('should make a get request', () => {
    financeResource.get();
    expect(baseResource.get).toHaveBeenCalledWith('http://localhost:3000/finance?key=489e9445');
  });
});
