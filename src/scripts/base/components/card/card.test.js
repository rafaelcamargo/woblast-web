import React from 'react';
import { shallow } from 'enzyme';
import { WCard } from '@scripts/base/components/card/card';

describe('Card', () => {
  function mount(props = {}){
    return shallow(
      <WCard>
        { props.content }
      </WCard>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-card');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
