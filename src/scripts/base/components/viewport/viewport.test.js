import React from 'react';
import { shallow } from 'enzyme';
import { WTopbar } from '@scripts/base/components/topbar/topbar';
import { WViewport } from '@scripts/base/components/viewport/viewport';

describe('Viewport', () => {
  function mount(props = {}){
    return shallow(
      <WViewport hideTopbar={ props.hideTopbar }>
        { props.content }
      </WViewport>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-viewport');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.find(WTopbar).length).toEqual(1);
  });

  it('should optionally hide topbar', () => {
    const wrapper = mount({ hideTopbar: true });
    expect(wrapper.find(WTopbar).length).toEqual(0);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
