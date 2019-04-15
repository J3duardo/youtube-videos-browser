import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ""
  }

  onChangeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>     
      </div>
    );
  }
}

export default SearchBar;