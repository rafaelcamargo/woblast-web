import { PromiseMock } from '@scripts/base/mocks/promise';
import { FinanceResponseMock } from '@scripts/finance/mocks/finance';
import baseResource from '@scripts/base/resources/base/base';
import financeResource from './finance';

describe('Finance Resource', () => {
  it('should make a get request', () => {
    baseResource.get = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    financeResource.get();
    expect(baseResource.get).toHaveBeenCalledWith('http://localhost:3000/finance?key=489e9445');
  });

  it('should parse response data', () => {
    const response = new FinanceResponseMock();
    baseResource.get = jest.fn(() => new PromiseMock('success', { response }));
    expect(financeResource.get()).toEqual([
      {
        type: 'currencies',
        key: 'USD',
        name: 'Dollar',
        value: 4.1037,
        variation: 0.293
      },
      {
        type: 'currencies',
        key: 'EUR',
        name: 'Euro',
        value: 4.5049,
        variation: 0.406
      },
      {
        type: 'currencies',
        key: 'GBP',
        name: 'Pound Sterling',
        value: 5.0249,
        variation: 0.386
      },
      {
        type: 'currencies',
        key: 'BTC',
        name: 'Bitcoin',
        value: 37318.024,
        variation: -0.199
      },
      {
        type: 'stocks',
        key: 'IBOVESPA',
        name: 'BM&F BOVESPA',
        value: 1.27,
        indexationValue: true
      },
      {
        type: 'stocks',
        key: 'NASDAQ',
        name: 'NASDAQ Stock Market',
        value: 1.02,
        indexationValue: true
      },
      {
        type: 'stocks',
        key: 'CAC',
        name: 'CAC 40',
        value: 0.78,
        indexationValue: true
      },
      {
        type: 'stocks',
        key: 'NIKKEI',
        name: 'Nikkei 225',
        value: 0.24,
        indexationValue: true
      }
    ]);
  });

  it('should handle error', () => {
    const err = { some: 'err' };
    baseResource.get = jest.fn(() => new PromiseMock('error', { err }));
    expect(financeResource.get()).toEqual(err);
  });
});
