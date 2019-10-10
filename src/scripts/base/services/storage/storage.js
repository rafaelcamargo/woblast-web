import localStorageService from '@scripts/base/services/local-storage/local-storage';

const _public = {};

_public.set = (key, value) => {
  localStorageService.set(encode(key), encode(value));
};

_public.get = (key, { isJSON } = {}) => {
  const value = localStorageService.get(encode(key));
  if(value)
    return isJSON ? JSON.parse(decode(value)) : decode(value);
};

_public.remove = (key) => {
  localStorageService.remove(encode(key));
};

function encode(value){
  return typeof value === 'string' ?
    window.btoa(value) :
    window.btoa(JSON.stringify(value));
}

function decode(value){
  return window.atob(value);
}

export default _public;
