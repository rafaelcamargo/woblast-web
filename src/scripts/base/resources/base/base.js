import axios from 'axios';

const _public = {};

_public.get = (url, query) => {
  return request({
    method: 'get',
    url,
    query
  });
};

function request(args){
  return axios[args.method](args.url, getParams(args));
}

function getParams({ query }){
  if(query)
    return { params: query };
}

export default _public;
