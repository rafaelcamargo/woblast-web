import React from 'react';
import { shallow } from 'enzyme';
import { PromiseMock } from '@scripts/base/mocks/promise';
import { Loader } from '@scripts/base/components/loader/loader';
import { WRequester } from '@scripts/base/components/requester/requester';

describe('Requester', () => {
  function mount(props = {}){
    const onFetch = props.onFetch || jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const onFetchSuccess = props.onFetchSuccess || jest.fn();
    const onFetchError = props.onFetchError || jest.fn();
    return shallow(
      <WRequester
        onFetch={ onFetch }
        onFetchSuccess={ onFetchSuccess }
        onFetchError={ onFetchError }>
        { props.content }
      </WRequester>
    );
  }

  function getContentElement(wrapper){
    return wrapper.find('[data-requester-content]');
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-requester');
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

  it('should hide content on fetch', () => {
    const onFetch = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onFetch });
    expect(getContentElement(wrapper).prop('className').includes('w-requester-content-visible')).toEqual(false);
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

  it('should show content on fetch complete', () => {
    const onFetch = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onFetch });
    expect(getContentElement(wrapper).prop('className').includes('w-requester-content-visible')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
