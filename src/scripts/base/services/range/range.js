const _public = {};

_public.buildStringifiedNumberRange = (min, max) => {
  const range = [];
  for (var value = min; value <= max; value++)
    range.push(value.toString());
  return range;
};

export default _public;
