import localStorageService from './local-storage';

describe('Local Storage Service', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('should set value', () => {
    localStorageService.set('name', 'rafael');
    expect(window.localStorage.getItem('name')).toEqual('rafael');
  });

  it('should get value', () => {
    window.localStorage.setItem('email', 'some@email.com');
    const value = localStorageService.get('email');
    expect(value).toEqual('some@email.com');
  });

  it('should remove value', () => {
    window.localStorage.setItem('email', 'some@email.com');
    localStorageService.remove('email');
    expect(window.localStorage.getItem('email')).toEqual(null);
  });
});
