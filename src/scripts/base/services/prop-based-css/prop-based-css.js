const _public = {};

_public.build = (baseCssClass, validPropValues, propValue) => {
  if(!propValue)
    return '';
  if(validPropValues.includes(propValue))
    return `${ baseCssClass }-${ propValue }`;
  throw new Error(buildErrorMessage(validPropValues, propValue));
};

function buildErrorMessage(validPropValues, propValue){
  return `You have set an invalid prop value: '${propValue}'. Valid values are: ${validPropValues.join(', ')}.`;
}

export default _public;
