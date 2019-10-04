import React from "react"
import SearchBar from "./SearchBar"

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    exampleProp:{
      
    }
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <div id = "search-results">

        </div>
        {/* <Map /> */}
      </div>
    )
  }
}


export default Search