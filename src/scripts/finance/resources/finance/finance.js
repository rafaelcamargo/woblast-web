import ENV from '@environment';
import baseResource from '@scripts/base/resources/base/base';

const _public = {};

_public.get = () => {
  return baseResource.get(getUrl()).then(response => {
    return parseData(response);
  }, err => err);
};

_public.getItem = (type, key) => {
  return _public.get().then(items => {
    return items.find(item => {
      return item.type === type && item.key === key;
    });
  }, err => err);
};

function getUrl(){
  return `${ENV.VERVET.BASE_URL}/projects/${ENV.VERVET.PROJECTS.FINANCE.ID}/finances`;
}

function parseData(response){
  const { data: { results } } = response;
  return [
    parseItemData(results, 'currencies', 'USD', 'buy', { addVariation: true, valueSymbol: 'R$' }),
    parseItemData(results, 'currencies', 'EUR', 'buy', { addVariation: true, valueSymbol: 'R$' }),
    parseItemData(results, 'currencies', 'GBP', 'buy', { addVariation: true, valueSymbol: 'R$' }),
    parseItemData(results, 'currencies', 'BTC', 'buy', { addVariation: true, valueSymbol: 'R$' }),
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
    indexationValue: opts.indexationValue,
    value: item[valueKey]
  };
  if(opts.addVariation)
    parsedItem.variation = variation;
  if(opts.valueSymbol)
    parsedItem.valueSymbol = opts.valueSymbol;
  return parsedItem;
}

export default _public;
