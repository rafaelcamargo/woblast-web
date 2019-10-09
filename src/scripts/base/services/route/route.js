const _public = {};

_public.init = history => {
  setHistory(history);
};

function setHistory(history){
  _public.history = history;
}

export default _public;
