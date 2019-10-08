import propBaedCSSService from './prop-based-css';

describe('Prop Based CSS Service', () => {
  it('should build css class based on prop', () => {
    const baseCssClass = 'w-comp';
    const validPropValues = ['green', 'blue'];
    const propValue = 'blue';
    const cssClass = propBaedCSSService.build(baseCssClass, validPropValues, propValue);
    expect(cssClass).toEqual('w-comp-blue');
  });

  it('should retun an empty string if no prop value has been passed', () => {
    const baseCssClass = 'w-comp';
    const validPropValues = ['green', 'blue'];
    const cssClass = propBaedCSSService.build(baseCssClass, validPropValues);
    expect(cssClass).toEqual('');
  });

  it('should throw error if an invalid prop value has been passed', () => {
    const err = 'You have set an invalid prop value: \'red\'. Valid values are: green, blue.';
    const baseCssClass = 'w-comp';
    const validPropValues = ['green', 'blue'];
    const propValue = 'red';
    const execution = () => propBaedCSSService.build(baseCssClass, validPropValues, propValue);
    expect(execution).toThrowError(err);
  });
});
