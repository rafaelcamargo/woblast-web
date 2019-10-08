import React from 'react';
import { shallow } from 'enzyme';
import { WButton } from '@scripts/base/components/button/button';

describe('Button', () => {
  function mount(props = {}){
    return shallow(
      <WButton theme={ props.theme } display={ props.display }>
        { props.content }
      </WButton>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-button');
  });

  it('should render a primary button', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('w-button-primary')).toEqual(true);
  });

  it('should render a block button', () => {
    const wrapper = mount({ display: 'block' });
    expect(wrapper.prop('className').includes('w-button-block')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <span>Hello!</span>;
    const wrapper = mount({ content });
    expect(wrapper.childAt(0).text()).toEqual('Hello!');
  });
});
