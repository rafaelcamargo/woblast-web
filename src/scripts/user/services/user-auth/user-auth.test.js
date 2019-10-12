import routeService from '@scripts/base/services/route/route';
import storageService from '@scripts/base/services/storage/storage';
import userResource from '@scripts/user/resources/user/user';
import userAuthService from './user-auth';

describe('User Auth Service', () => {
  function mockUsers(){
    return {
      'leo@email.com': { password: '123' },
      'rafael@email.com': { password: '456' }
    };
  }

  function getAuthErrorMessage(){
    return 'Invalid credentials. Please, try again.';
  }

  beforeEach(() => {
    userResource.findByEmail = jest.fn(email => mockUsers()[email]);
    routeService.go = jest.fn();
    storageService.set = jest.fn();
    storageService.get = jest.fn();
    storageService.remove = jest.fn();
  });

  it('should succeed auth if credentials are right', () => {
    const onSuccess = jest.fn();
    userAuthService.auth('leo@email.com', '123', onSuccess);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('should fail auth if password does not match', () => {
    const errorMessage = getAuthErrorMessage();
    const onError = jest.fn();
    userAuthService.auth('leo@email.com', '999', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMessage);
  });

  it('should fail auth if user does not exist', () => {
    const errorMessage = getAuthErrorMessage();
    const onError = jest.fn();
    userAuthService.auth('mario@email.com', '123', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMessage);
  });

  it('should store auth token on auth success', () => {
    const email = 'leo@email.com';
    const user = mockUsers()[email];
    userAuthService.auth(email, '123', jest.fn());
    expect(storageService.set).toHaveBeenCalledWith('w-auth-token', user);
  });

  it('should look auth token on storage', () => {
    userAuthService.isAuthenticated();
    expect(storageService.get).toHaveBeenCalledWith('w-auth-token', { isJSON: true });
  });

  it('should logout', () => {
    userAuthService.logout();
    expect(storageService.remove).toHaveBeenCalledWith('w-auth-token');
    expect(routeService.go).toHaveBeenCalledWith('/');
  });
});
