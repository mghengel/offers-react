import React, { Component } from "react";
import PropTypes from 'prop-types';

export class Offer extends Component {
  handleClose = () => {
    this.props.handleClose();
  };
  handleClick = () => {
    this.props.handleClick(this.props.offer.id);
  };
  render(){
    const { offer, singleOffer, className } = this.props;
    const expirationDate = new Date(offer.expiration).toLocaleString();
    return(
      <div className={`${className} offer ${singleOffer ? 'single' : ''}`} onClick={this.handleClick}>
        {singleOffer &&
          <a className="back" onClick={this.handleClose}>Back</a>
        }
        <div className="title">{offer.name}</div>
        <div className="imgContainer">
          <img src={offer.image_url} alt=""/>
        </div>
        <div className="description">{offer.description}</div>
        { singleOffer &&
          <div>
            <div className="terms">{offer.terms}</div>
            <div className="expires">Expires: {expirationDate}</div>
          </div>
        }
      </div>
     )
   }
}

Offer.proptypes = {
  handleClick: PropTypes.func
};

Offer.defaultProps = {
  handleClick: () => {},
};

export default Offer;