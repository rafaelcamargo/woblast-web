import routeService from '@scripts/base/services/route/route';

describe('Route Service', () => {
  function mockHistory({ pathname }){
    return {
      listen: jest.fn(cb => cb()),
      location: { pathname },
      push: jest.fn()
    };
  }

  it('should set history on initialize', () => {
    const historyMock = mockHistory({ pathname: '/' });
    routeService.init(historyMock);
    expect(routeService.history).toEqual(historyMock);
  });

  it('should navigate to route by route path', () => {
    const routePath = '/sign-in';
    const historyMock = mockHistory({ pathname: '/' });
    routeService.init(historyMock);
    routeService.go(routePath);
    expect(historyMock.push).toHaveBeenCalledWith(routePath);
  });
});
