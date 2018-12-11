import React, { Component } from "react";
import { Offer, Filter, Search, Offers, Api } from "../";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retailers: [],
      offers: [],
      currentOffer: '',
      filterOffers: [],
      currentRetailer: '',
      searchValue: ''
    }
  }
  componentDidMount(){
    this.getOffers();
    this.getRetailers();
  }
  handleClose = () => {
    this.setState({ currentOffer: '' });
  };
  render(){
    const { className } = this.props;
    const { retailers, filterOffers, currentOffer, currentRetailer, searchValue } = this.state;
    if (!retailers.length && !filterOffers.length) return <div>...Loading</div>;
    return(
      <div className={`${className} offerContainer`}>
        {currentOffer ?
          <Offer handleClose={this.handleClose} offer={currentOffer} singleOffer={true} />
          :
          <div>
            <Filter retailers={retailers} currentRetailer={currentRetailer} filterByRetailer={this.filterByRetailer} />
            <div>Or</div>
            <Search handleSearch={this.handleSearch} value={searchValue} />
            <Offers offers={filterOffers} handleClick={this.getOffers}/>
          </div>
        }
      </div>
     )
   }
   getOffers = offerId => {
     Api.getOffers(offerId).then(data => {
       if (offerId) {
         this.setState({ currentOffer: data });
       } else {
         this.setState({
           offers: data,
           filterOffers: data
         })
       }
     });
   };
   getRetailers = () => {
     Api.getRetailers().then(data => {
       const retailers = data.sort( (a, b) => {
         return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
       });
       this.setState({ retailers }) 
     })
   };
   filterByRetailer = retailer_id => {
     this.setState({ 
       currentRetailer: retailer_id,
       searchValue: ''
     });
     if (retailer_id) {
       Api.filterByRetailer(retailer_id).then((data) => {
           const offerIds = data.map(x => x.offer_id);
           let retailerOffers = this.state.offers.filter(offer => {
             return offerIds.includes(offer.id)
           })
           this.setState({ filterOffers: retailerOffers });
         });
       } else {
         // Clears the filter
         this.setState({ filterOffers: this.state.offers });
       }
     
   };
   handleSearch = searchValue => {
     this.setState({ 
       searchValue,
       currentRetailer: '' 
     });
     Api.handleSearch(searchValue).then((data) => {
         this.setState({ filterOffers: data }) 
       });
   };
}

export default Main;