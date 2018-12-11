export class Api {
  constructor(api) {
    this.api = api;
  }
  getOffers = offerId => {
    return fetch(`/api/v1/offers${offerId ? '/' + offerId : ''}`)
      .then((response) => {return response.json()})
  };
  getRetailers = () => {
    return fetch(`/api/v1/retailers`)
      .then((response) => {return response.json()})
  };
  filterByRetailer = retailer_id => {
    return fetch(`/api/v1/retailer_offers${retailer_id ? '?retailer_id=' + retailer_id : ''}`)
      .then((response) => {return response.json()})
  };
  handleSearch = searchValue => {
    return fetch(`/api/v1/offers?q=${searchValue}`)
      .then((response) => {return response.json()})
  };
}

export default new Api();
