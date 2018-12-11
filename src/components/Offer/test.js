import React from 'react';
import {shallow} from 'enzyme';
import { Offer } from './Offer';

describe('Offer', () => {
  const offer = {
    created_at: "2018-12-10T02:38:37.309Z",
    description: "3-pack of 1.62 fl oz. bottles↵Offer only redeemable at Sam's Club",
    expiration: "2016-04-03T06:59:00.000Z",
    id: 1284,
    image_url: "http://s3.amazonaws.com/ibotta-product/offer/Fs9JO4bjT5Kakh920d4WEw-large.png",
    name: "Crystal Light Liquid",
    terms: "Offer valid on Crystal Light Liquid in 3-pack of 1.62 fl oz. bottles↵↵Offer only redeemable at Sam's Club.",
    updated_at: "2018-12-10T02:38:37.309Z"
  };

  it('renders without terms and expiration', () => {
    const component = shallow(<Offer offer={offer} />);
    expect(component.find('.title').text()).toEqual(offer.name);
    expect(component.find('.description').text()).toEqual(offer.description);
    expect(component.find('.terms').exists()).toEqual(false);
    expect(component.find('.expires').exists()).toEqual(false);
  });

  it('renders with terms and expiration', () => {
    const component = shallow(<Offer offer={offer} singleOffer={true} />);
    expect(component.find('.title').text()).toEqual(offer.name);
    expect(component.find('.description').text()).toEqual(offer.description);
    expect(component.find('.terms').text()).toEqual(offer.terms);
    expect(component.find('.expires').text()).toEqual("Expires: " + new Date(offer.expiration).toLocaleString());
  });
  
});
