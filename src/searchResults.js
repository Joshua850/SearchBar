import React, { Component } from "react";
/** We use this component to display or render the results of search**/
class SearchResults extends Component {
  // we need to write a filter function to perform our search
  // we will need to check the name and company and phone number
  // searchTerm is what is provided to us by the user in the text box
  addressFilterFunction(searchTerm) {
    return function (addrObject) {
      // convert everything to lower case for string matching
      let name = addrObject.full_name.toLowerCase();
      let company = addrObject.company.toLowerCase();
      let phone_number = addrObject.phone_number; // no need to lower case numbers
      // we also check if the searchTerm is just blank space
      return (
        searchTerm !== "" &&
        (name.includes(searchTerm.toLowerCase()) ||
          phone_number.includes(searchTerm) ||
          company.includes(searchTerm.toLowerCase()))
      );
    };
  }

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    // let's calculate how many elements or obejcts are
    // in the array after the filter is applied.
    let numberResults = arrayPassedAsParameter.filter(
      this.addressFilterFunction(searchTermFromProps)
    ).length;

    return (
      <div className="SearchResultsDisplay">
        <hr />
        <h1>Search Results</h1>
        Number of Results found {numberResults}
        {arrayPassedAsParameter
          .filter(this.addressFilterFunction(searchTermFromProps))
          .map((a) => (
            <div key={a.id}>
              <b>{a.full_name}</b>, <i>{a.company}</i> Phone: [{a.phone_number}]
            </div>
          ))}
      </div>
    );
  }
} //
export default SearchResults;
