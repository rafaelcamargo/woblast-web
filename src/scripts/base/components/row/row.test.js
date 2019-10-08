import React from 'react';
import { shallow } from 'enzyme';
import { WRow } from '@scripts/base/components/row/row';

describe('Row', () => {
  function mount(props = {}){
    return shallow(
      <WRow align={ props.align } offset={ props.offset }>
        { props.content }
      </WRow>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-row');
  });

  it('should optionally align text content to the center', () => {
    const wrapper = mount({ align: 'center' });
    expect(wrapper.prop('className').includes('w-row-center')).toEqual(true);
  });

  it('should optionally align text content to the right', () => {
    const wrapper = mount({ align: 'right' });
    expect(wrapper.prop('className').includes('w-row-right')).toEqual(true);
  });

  it('should optionally offset row', () => {
    const wrapper = mount({ offset: '4' });
    expect(wrapper.prop('className').includes('w-row-offset-4')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
