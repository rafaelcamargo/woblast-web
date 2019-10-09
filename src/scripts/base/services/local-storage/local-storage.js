const _public = {};

_public.set = (key, value) => {
  window.localStorage.setItem(key, value);
};

_public.get = key => {
  return window.localStorage.getItem(key);
};

export default _public;
