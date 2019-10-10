import { FinanceResponseMock } from '@scripts/finance/mocks/finance';
import ENV from '@environment';
import baseResource from '@scripts/base/resources/base/base';

const _public = {};

_public.get = () => {
  return baseResource.get(getUrl()).then(response => {
    return parseData(response);
  }, err => err);
};

function getUrl(){
  return `${ENV.HG_BRASIL_API.BASE_URL}/finance?format=${ENV.HG_BRASIL_API.FORMAT}&key=${ENV.HG_BRASIL_API.KEY}`;
}

function parseData(response){
  const { data: { results } } = response;
  return [
    parseItemData(results, 'currencies', 'USD', 'buy', { addVariation: true }),
    parseItemData(results, 'currencies', 'EUR', 'buy', { addVariation: true }),
    parseItemData(results, 'currencies', 'GBP', 'buy', { addVariation: true }),
    parseItemData(results, 'currencies', 'BTC', 'buy', { addVariation: true }),
    parseItemData(results, 'stocks', 'IBOVESPA', 'variation', { indexationValue: true }),
    parseItemData(results, 'stocks', 'NASDAQ', 'variation', { indexationValue: true }),
    parseItemData(results, 'stocks', 'CAC', 'variation', { indexationValue: true }),
    parseItemData(results, 'stocks', 'NIKKEI', 'variation', { indexationValue: true })
  ];
}

function parseItemData(results, type, key, valueKey, opts){
  const item = results[type][key];
  const { buy, variation, name } = item;
  const parsedItem = {
    type,
    key,
    name,
    value: item[valueKey]
  };
  if(opts.addVariation)
    parsedItem.variation = variation;
  if(opts.indexationValue)
    parsedItem.indexationValue = opts.indexationValue;
  return parsedItem;
}

export default _public;
