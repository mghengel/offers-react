import React, { Component } from "react";
import { Offer, Filter, Search, Offers } from "../";

export class OffersContainer extends Component {
  render(){
    const { className, retailers, currentRetailer, searchValue, filterOffers, currentOffer, getOffers, filterByRetailer, handleSearch, handleClose } = this.props;
    return(
      <div className={`${className} offerContainer`}>
        {currentOffer ?
          <Offer handleClose={handleClose} offer={currentOffer} singleOffer={true} />
          :
          <div>
            <div>
              <Filter retailers={retailers} currentRetailer={currentRetailer} filterByRetailer={filterByRetailer} />
              <div>Or</div>
              <Search handleSearch={handleSearch} value={searchValue} />
              <Offers offers={filterOffers} handleClick={getOffers}/>
            </div>
          </div>
        }
      </div>
     )
   }
}

export default OffersContainer;
