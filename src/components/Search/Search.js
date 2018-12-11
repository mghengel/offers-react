import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value })
    }
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };
  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };
  render(){
    const { className } = this.props;
    return(
      <div className={`${className} search`}>
        <form onSubmit={this.handleSearch}>
          <label htmlFor="searchInput">Search for offers</label>
          <input id="searchInput" onChange={this.handleInputChange} type="text" value={this.state.value} />
        </form>
      </div>
     )
   }
}

export default Search;
