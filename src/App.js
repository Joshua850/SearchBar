import React, { Component } from "react";

import { addressBook } from "./addressBook";
import SearchForm from "./searchForm";
import SearchResults from "./searchResults";

// We now have our own reference to the addressBook array
// from external Javascript file
const localAddressBook = addressBook;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", len: 0, globalArray: localAddressBook };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  } // end constructor
  /** This is the method called when the search form box changes **/
  /** Javascript will create an event object for you **/
  onSearchFormChange(event) {
    // We re-assign the state variable called searchTerm
    // event is understood by Javascript to be a change to a UI item
    this.setState({ searchTerm: event.target.value });
    let sTerm = event.target.value; // typed in value
    let numChars = sTerm.length;
    this.setState({ len: numChars });
  }
  render() {
    return (
      <div className="App">
        <h1>CS385 Search App</h1>
        The search term is <b>[{this.state.searchTerm}]</b>. There are{" "}
        <b>[{this.state.len}]</b> characters typed.
        <SearchForm
          searchTerm={this.state.searchTerm}
          onChange={this.onSearchFormChange}
        />
        <SearchResults
          searchTerm={this.state.searchTerm}
          globalArray={this.state.globalArray}
        />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class



export default App;
