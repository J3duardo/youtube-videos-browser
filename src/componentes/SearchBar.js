import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text"/>
          </div>
        </form>     
      </div>
    );
  }
}

export default SearchBar;