import ENV from '@environment';
import baseResource from '@scripts/base/resources/base/base';

const _public = {};

_public.get = () => {
  return baseResource.get(getUrl());
};

function getUrl(){
  return `${ENV.HG_BRASIL_API.BASE_URL}/finance?key=${ENV.HG_BRASIL_API.KEY}`;
}

export default _public;
