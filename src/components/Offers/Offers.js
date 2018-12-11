import React, { Component } from "react";
import { Offer } from '../';

export class Offers extends Component {
  offerClick = offerId => {
    this.props.handleClick(offerId)
  };
  render(){
    const { className, offers } = this.props;
    return(
      <div className={`${className} offers`}>
        {offers.length ? 
          offers.map(offer => <Offer key={offer.id} offer={offer} handleClick={this.offerClick} /> )
        :
          <span>Sorry there are no offers for this retailer.</span>
        }        
      </div>
     )
   }
}

export default Offers;