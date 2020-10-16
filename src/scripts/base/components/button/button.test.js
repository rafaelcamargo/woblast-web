import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@scripts/base/components/button/button';

describe('Button', () => {
  function mount(props = {}){
    return shallow(
      <Button
        type={ props.type }
        theme={ props.theme }
        display={ props.display }
        onClick={ props.onClick }>
        { props.content }
      </Button>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-button');
  });

  it('should render a button type button by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('type')).toEqual('button');
  });

  it('should optionally render a button type submit', () => {
    const type = 'submit';
    const wrapper = mount({ type });
    expect(wrapper.prop('type')).toEqual(type);
  });

  it('should render a primary button', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('w-button-primary')).toEqual(true);
  });

  it('should render a block button', () => {
    const wrapper = mount({ display: 'block' });
    expect(wrapper.prop('className').includes('w-button-block')).toEqual(true);
  });

  it('should execute click callback if callback has been provided', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should not execute click callback if callback has not been provided', () => {
    const onClick = jest.fn();
    const wrapper = mount();
    wrapper.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should render some content', () => {
    const content = <span>Hello!</span>;
    const wrapper = mount({ content });
    expect(wrapper.childAt(0).text()).toEqual('Hello!');
  });
});
