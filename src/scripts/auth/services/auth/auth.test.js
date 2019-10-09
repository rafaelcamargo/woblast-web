import storageService from '@scripts/base/services/storage/storage';
import userResource from '@scripts/user/resources/user/user';
import authService from '@scripts/auth/services/auth/auth';

describe('Auth Service', () => {
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
    storageService.set = jest.fn();
  });

  it('should succeed auth if credentials are right', () => {
    const onSuccess = jest.fn();
    authService.auth('leo@email.com', '123', onSuccess);
    expect(onSuccess).toHaveBeenCalled();
  });

  it('should fail auth if password does not match', () => {
    const errorMessage = getAuthErrorMessage();
    const onError = jest.fn();
    authService.auth('leo@email.com', '999', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMessage);
  });

  it('should fail auth if user does not exist', () => {
    const errorMessage = getAuthErrorMessage();
    const onError = jest.fn();
    authService.auth('mario@email.com', '123', jest.fn(), onError);
    expect(onError).toHaveBeenCalledWith(errorMessage);
  });

  it('should store auth token on auth success', () => {
    const email = 'leo@email.com';
    const user = mockUsers()[email];
    authService.auth(email, '123', jest.fn());
    expect(storageService.set).toHaveBeenCalledWith('auth-token', user);
  });
});