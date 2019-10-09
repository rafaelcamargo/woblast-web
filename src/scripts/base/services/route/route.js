import queryStringService from 'query-string';

const _public = {};

_public.init = history => {
  setHistory(history);
};

_public.go = routePath => {
  _public.history.push(routePath);
};

_public.getSearchParams = param => {
  const params = getSearchParams();
  return param ? params[param] : params;
};

function setHistory(history){
  _public.history = history;
}

function getSearchParams(){
  const { search } = _public.history.location;
  return queryStringService.parse(search);
}

export default _public;
