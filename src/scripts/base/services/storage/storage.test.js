import localStorageService from '@scripts/base/services/local-storage/local-storage';
import storageService from './storage';

describe('Storage Service', () => {
  function mockStore(){
    return {
      'bmFtZQ==': 'cmFmYWVs',
      'dXNlcnM=': 'W3sic29tZSI6InVzZXIifV0='
    };
  }
  beforeEach(() => {
    localStorageService.set = jest.fn();
    localStorageService.get = jest.fn(key => mockStore()[key]);
    localStorageService.remove = jest.fn();
  });

  it('should set string value', () => {
    storageService.set('name', 'rafael');
    expect(localStorageService.set).toHaveBeenCalledWith('bmFtZQ==', 'cmFmYWVs');
  });

  it('should set object value', () => {
    storageService.set('users', [{some: 'user'}]);
    expect(localStorageService.set).toHaveBeenCalledWith(
      'dXNlcnM=',
      'W3sic29tZSI6InVzZXIifV0='
    );
  });

  it('should get value by key', () => {
    const value = storageService.get('name');
    expect(value).toEqual('rafael');
  });

  it('should get value by key as JSON', () => {
    const value = storageService.get('users', { isJSON: true });
    expect(value).toEqual([{some: 'user'}]);
  });

  it('should return undefined if getting value by non existing key as JSON', () => {
    const value = storageService.get('cities', { isJSON: true });
    expect(value).not.toBeDefined();
  });

  it('should remove value', () => {
    storageService.remove('cities');
    expect(localStorageService.remove).toHaveBeenCalledWith('Y2l0aWVz');
  });
});
