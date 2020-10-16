import React from 'react';
import { shallow } from 'enzyme';
import { Col } from '@scripts/base/components/col/col';

describe('Col', () => {
  function mount(props = {}){
    return shallow(
      <Col size={ props.size } offset={ props.offset }>
        { props.content }
      </Col>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-col');
  });

  it('should optionally set a size', () => {
    const wrapper = mount({ size: '3' });
    expect(wrapper.prop('className').includes('w-col-3')).toEqual(true);
  });

  it('should optionally set a offset', () => {
    const wrapper = mount({ offset: '3' });
    expect(wrapper.prop('className').includes('w-col-offset-3')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
