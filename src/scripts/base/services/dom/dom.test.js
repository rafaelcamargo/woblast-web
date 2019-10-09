import domService from './dom';

describe('DOM Service', () => {
  function mockElementReference(){
    return {
      current: {
        focus: jest.fn()
      }
    };
  }

  it('should focus element', () => {
    const elementRef = mockElementReference();
    domService.focusElement(elementRef);
    expect(elementRef.current.focus).toHaveBeenCalled();
  });
});
