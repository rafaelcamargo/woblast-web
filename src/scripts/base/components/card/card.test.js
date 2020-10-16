import React from 'react';
import { shallow } from 'enzyme';
import { PromiseMock } from '@scripts/base/mocks/promise';
import { Loader } from '@scripts/base/components/loader/loader';
import { Card } from '@scripts/base/components/card/card';

describe('Card', () => {
  function mount(props = {}){
    return shallow(
      <Card
        title={ props.title }
        onFetch={ props.onFetch }
        onFetchSuccess={ props.onFetchSuccess }
        onFetchError={ props.onFetchError }>
        { props.content }
      </Card>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-card');
  });

  it('should optionally render a title', () => {
    const title = 'Card';
    const wrapper = mount({ title });
    expect(wrapper.find('[data-card-title]').text()).toEqual(title);
  });

  it('should execute fetch callback if callback has been given', () => {
    const onFetch = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onFetch });
    expect(onFetch).toHaveBeenCalled();
  });

  it('should show loader on fetch', () => {
    const onFetch = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onFetch });
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('should execute fetch success callback on fetch success', () => {
    const response = { some: 'response' };
    const onFetch = jest.fn(() => new PromiseMock('success', { response }));
    const onFetchSuccess = jest.fn();
    const wrapper = mount({ onFetch, onFetchSuccess });
    expect(onFetchSuccess).toHaveBeenCalledWith(response);
    expect(wrapper.find(Loader).length).toEqual(0);
  });

  it('should execute fetch error callback on fetch error', () => {
    const err = { some: 'err' };
    const onFetch = jest.fn(() => new PromiseMock('error', { err }));
    const onFetchError = jest.fn();
    const wrapper = mount({ onFetch, onFetchError });
    expect(onFetchError).toHaveBeenCalledWith(err);
    expect(wrapper.find(Loader).length).toEqual(0);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
