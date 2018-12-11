import React from "react";

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.currentRetailer || ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRetailer !== this.state.valaue) {
      this.setState({ value: nextProps.currentRetailer });
    }
  }
  handleSelect = e => {
    const value = e.target.value;
    this.setState({ value })
    this.props.filterByRetailer(value);
  };
  render(){
    const { className, retailers } = this.props;
    const { value } = this.state;
    return(
      <div className={`${className} filter`}>
      <label htmlFor="filterOption">Filter By Retailer</label>
        <select id="filterOption" value={value} onChange={this.handleSelect}>
          <option value="">All Retailers</option>
          {retailers.map(retailer => {
            return (
              <option key={retailer.id} value={retailer.id}>{retailer.name}</option>
            )
          })}
        </select>
      </div>
     )
   }
}

export default Filter;