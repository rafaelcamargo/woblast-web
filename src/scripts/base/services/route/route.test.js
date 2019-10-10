import queryStringService from 'query-string';
import routeService from '@scripts/base/services/route/route';

describe('Route Service', () => {
  function mockHistory({ pathname, search }){
    return {
      listen: jest.fn(cb => cb()),
      location: { pathname, search },
      push: jest.fn(),
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

  it('should get search params', () => {
    const historyMock = mockHistory({ search: '?email=camargo@email.com&source=portfolio' });
    routeService.init(historyMock);
    const params = routeService.getSearchParams();
    expect(params).toEqual({
      email: 'camargo@email.com',
      source: 'portfolio'
    });
  });

  it('should get a single search param', () => {
    const historyMock = mockHistory({ search: '?email=leo@email.com' });
    routeService.init(historyMock);
    expect(routeService.getSearchParams('email')).toEqual('leo@email.com');
  });

  it('should get pathname', () => {
    const pathname = '/sign-up';
    const historyMock = mockHistory({ pathname });
    routeService.init(historyMock);
    expect(routeService.getPathname()).toEqual(pathname);
  });
});
