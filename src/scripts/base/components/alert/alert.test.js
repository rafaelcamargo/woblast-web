import React from 'react';
import { shallow } from 'enzyme';
import { WAlert } from '@scripts/base/components/alert/alert';

describe('Alert', () => {
  function mount(props = {}){
    return shallow(
      <WAlert theme={ props.theme }>
        { props.content }
      </WAlert>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-alert');
  });

  it('should optionally set a theme', () => {
    const wrapper = mount({ theme: 'danger' });
    expect(wrapper.prop('className').includes('w-alert-danger')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
