import routeService from '@scripts/base/services/route/route';

describe('Route Service', () => {
  function mockHistory({ pathname }){
    return {
      listen: jest.fn(cb => cb()),
      location: { pathname }
    };
  }

  it('should set history on initialize', () => {
    const historyMock = mockHistory({ pathname: '/' });
    routeService.init(historyMock);
    expect(routeService.history).toEqual(historyMock);
  });
});
