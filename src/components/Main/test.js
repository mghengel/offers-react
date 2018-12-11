import React from 'react';
import { mount } from 'enzyme';

import Main from './';

describe('Main', () => {
  describe('smoke test', () => {
    it('should render without crashing', () => {
      const component = mount(<Main className="" />);
      expect(component.text()).toEqual("...Loading");
    });
  });
});

