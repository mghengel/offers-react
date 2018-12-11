import React from 'react';
import { mount } from 'enzyme';
import Filter from './';

const retailers = [
  {
    created_at: "2018-12-10T02:38:37.573Z",
    id: 1,
    name: "King Soopers",
    updated_at: "2018-12-10T02:38:37.573Z"
  },
  {
    created_at: "2018-12-10T02:38:37.566Z",
    id: 2,
    name: "Safeway",
    updated_at: "2018-12-10T02:38:37.566Z"
  }
];

describe('Main', () => {
  describe('smoke test', () => {
    it('should render without crashing', () => {
      const component = mount(<Filter retailers={retailers} filterByRetailer={() => {}}/>);
      expect(component.find("option").at(0).text()).toEqual("All Retailers");
      expect(component.find("option").at(1).text()).toEqual(retailers[0].name);
      expect(component.find("option").at(2).text()).toEqual(retailers[1].name);
      expect(component.find("option").at(3).exists()).toEqual(false);
      component
        .find('select')
        .simulate('change', { target: { value: '1' } });
      expect(component.find('select').props().value).toEqual('1');
    });
  });
});