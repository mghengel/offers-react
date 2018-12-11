import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Offer, Filter, Search, Offers } from "../";

export class OffersContainer extends Component {
  render(){
    const { className, retailers, currentRetailer, searchValue, filterOffers, currentOffer, getOffers, filterByRetailer, handleSearch, handleClose } = this.props;
    return(
      <div className={`${className} offerContainer`}>
        {Object.keys(currentOffer).length ?
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

OffersContainer.propTypes = {
  className: PropTypes.string,
  retailers: PropTypes.array.isRequired,
  currentRetailer: PropTypes.string,
  searchValue: PropTypes.string,
  filterOffers: PropTypes.array.isRequired,
  currentOffer: PropTypes.shape({}),
  getOffers: PropTypes.func.isRequired,
  filterByRetailer: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

OffersContainer.defaultProps = {
  className: '',
  currentRetailer: '',
  searchValue: '',
  currentOffer: {}
};

export default OffersContainer;
