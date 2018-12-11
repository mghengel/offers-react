import React from 'react';
import { mount } from 'enzyme';
import Search from './';


describe('Main', () => {
  describe('smoke test', () => {
    it('should render without crashing', () => {
      const component = mount(<Search />);
      component
      .find('input')
      .simulate('change', { target: { value: '1999' } });
      expect(component.find('input').props().value).toEqual('1999');
    });
  });
});