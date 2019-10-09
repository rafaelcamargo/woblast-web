const _public = {};

_public.init = history => {
  setHistory(history);
};

_public.go = routePath => {
  _public.history.push(routePath);
};

function setHistory(history){
  _public.history = history;
}

export default _public;
