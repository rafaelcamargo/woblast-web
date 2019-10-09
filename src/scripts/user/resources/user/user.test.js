import storageService from '@scripts/base/services/storage/storage';
import userResource from './user';

describe('User Resource', () => {
  function mockCollection(){
    return [
      { name: 'leo', email: 'leo@email.com' },
      { name: 'fernando', email: 'fernando@email.com' }
    ];
  }

  beforeEach(() => {
    storageService.set = jest.fn();
    storageService.get = jest.fn(() => mockCollection());
  });

  it('should save user', () => {
    const newUser = { name: 'rafael', email: 'rafael@email.com' };
    userResource.save(newUser);
    expect(storageService.set).toHaveBeenCalledWith('w-users', [
      { name: 'leo', email: 'leo@email.com' },
      { name: 'fernando', email: 'fernando@email.com' },
      newUser
    ]);
  });

  it('should create collection when saving the first user', () => {
    storageService.get = jest.fn();
    const newUser = { name: 'rafael', email: 'rafael@email.com' };
    userResource.save(newUser);
    expect(storageService.set).toHaveBeenCalledWith('w-users', [ newUser ]);
  });

  it('should execute error callback if user email is already in use', () => {
    const errMessage = 'This email has already been used.';
    const newUser = { name: 'leonidas', email: 'leo@email.com' };
    const err = userResource.save(newUser);
    expect(err).toEqual(errMessage);
  });

  it('should find user by email', () => {
    const user = userResource.findByEmail('fernando@email.com');
    expect(storageService.get).toHaveBeenCalledWith('w-users', { isJSON: true });
    expect(user.name).toEqual('fernando');
  });
});
