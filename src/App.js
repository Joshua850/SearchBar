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

// /** We use this component to display or render the results of search**/
// class SearchResults extends Component {
//   // we need to write a filter function to perform our search
//   // we will need to check the name and company and phone number
//   // searchTerm is what is provided to us by the user in the text box
//   addressFilterFunction(searchTerm) {
//     return function (addrObject) {
//       // convert everything to lower case for string matching
//       let name = addrObject.full_name.toLowerCase();
//       let company = addrObject.company.toLowerCase();
//       let phone_number = addrObject.phone_number; // no need to lower case numbers
//       // we also check if the searchTerm is just blank space
//       return (
//         searchTerm !== "" &&
//         (name.includes(searchTerm.toLowerCase()) ||
//           phone_number.includes(searchTerm) ||
//           company.includes(searchTerm.toLowerCase()))
//       );
//     };
//   }

//   render() {
//     const arrayPassedAsParameter = this.props.globalArray;
//     const searchTermFromProps = this.props.searchTerm;

//     // let's calculate how many elements or obejcts are
//     // in the array after the filter is applied.
//     let numberResults = arrayPassedAsParameter.filter(
//       this.addressFilterFunction(searchTermFromProps)
//     ).length;

//     return (
//       <div className="SearchResultsDisplay">
//         <hr />
//         <h1>Search Results</h1>

//         Number of Results found {numberResults}

//         {arrayPassedAsParameter
//           .filter(this.addressFilterFunction(searchTermFromProps))
//           .map((a) => (
//             <div key={a.id}>
//               <b>{a.full_name}</b>, <i>{a.company}</i> Phone: [{a.phone_number}]
//             </div>
//           ))}
//       </div>
//     );
//   }
// } // close the SearchResults component

// class SearchForm extends Component {
//   render() {
//     // this.props are the properties which are provided or passed
//     // to this component. We have the searchTerm and we have the
//     // onChange function.
//     const searchTermFromProps = this.props.searchTerm;
//     const onChangeFromProps = this.props.onChange;

//     return (
//       <div className="SearchFormForm">
//         <hr />
//         Search Component:
//         <form>
//           <b>Type your search here: </b>
//           <input
//             type="text"
//             value={searchTermFromProps}
//             onChange={onChangeFromProps}
//           />
//         </form>
//         <hr />
//       </div>
//     );
//   }
// } // close the SearchForm Component

export default App;
