import React from 'react';
import { mount } from 'enzyme';
import OffersContainer from './';


const props = {
  filterByRetailer: () => {},
  retailers: [
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
  ],
  filterOffers: [
    {
        created_at: "2018-12-10T02:38:37.309Z",
        description: "3-pack of 1.62 fl oz. bottles↵Offer only redeemable at Sam's Club",
        expiration: "2016-04-03T06:59:00.000Z",
        id: 1284,
        image_url: "http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png",
        name: "Crystal Light Liquid",
        terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles↵↵Offer only redeemable at Sam's Club.",
        updated_at: "2018-12-10T02:38:37.309Z"
      },
      {
        created_at: "2018-12-10T02:38:37.318Z",
        description: "Ready-To-Drink 16 oz. Bottle - Iced Chai↵Original * Semi-Sweet * Decaf * Coffee-Blend",
        expiration: "2016-04-03T06:59:00.000Z",
        id: 1517,
        image_url: "http://product-images.ibotta.com/offer/eJ3W0yT9RY5de1j_Tn3L2Q-large.png",
        name: "Bhakti Chai",
        terms: "Offer valid on Bhakti Ready-To-Drink Chai, For any variety, in 16 oz. bottle↵↵Offer only redeemable at Whole Foods.",
        updated_at: "2018-12-10T02:38:37.318Z"
      }
  ]
}

describe('Main', () => {
  describe('smoke test', () => {
    it('should render without crashing', () => {
      const component = mount(<OffersContainer {...props} />);
    });
  });
  describe('filter', () => {
    const component = mount(<OffersContainer {...props} />);
    expect(component.find("option").at(0).text()).toEqual("All Retailers");
    expect(component.find("option").at(1).text()).toEqual(props.retailers[0].name);
    expect(component.find("option").at(2).text()).toEqual(props.retailers[1].name);
    expect(component.find("option").at(3).exists()).toEqual(false);
    component
      .find('select')
      .simulate('change', { target: { value: '1' } });
    expect(component.find('select').props().value).toEqual('1');
  });
  describe('search', () => {
    const component = mount(<OffersContainer {...props} />);
    component
      .find('input')
      .simulate('change', { target: { value: '1999' } });
      expect(component.find('input').props().value).toEqual('1999');
  });
  describe('Offers', () => {
    const component = mount(<OffersContainer {...props} />);
    const firstOffer = component.find('.offer').at(0);
    expect(firstOffer.find('.title').text()).toEqual(props.filterOffers[0].name);
    expect(firstOffer.find('.description').text()).toEqual(props.filterOffers[0].description);
    expect(firstOffer.find('.terms').exists()).toEqual(false);
    expect(firstOffer.find('.expires').exists()).toEqual(false);

    const secondOffer = component.find('.offer').at(1);
    expect(secondOffer.find('.title').text()).toEqual(props.filterOffers[1].name);
    expect(secondOffer.find('.description').text()).toEqual(props.filterOffers[1].description);
    expect(secondOffer.find('.terms').exists()).toEqual(false);
    expect(secondOffer.find('.expires').exists()).toEqual(false);
  });
  describe('Single Offer', () => {
    const component = mount(<OffersContainer {...props} currentOffer={props.filterOffers[0]} />);
    expect(component.find('.title').text()).toEqual(props.filterOffers[0].name);
    expect(component.find('.description').text()).toEqual(props.filterOffers[0].description);
    expect(component.find('.terms').text()).toEqual(props.filterOffers[0].terms);
    expect(component.find('.expires').text()).toEqual("Expires: " + new Date(props.filterOffers[0].expiration).toLocaleString());

    expect(component.find('input').exists()).toEqual(false)
    expect(component.find('select').exists()).toEqual(false)
  });
});