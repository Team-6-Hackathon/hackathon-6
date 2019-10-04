import React from "react"
import SearchBar from "./SearchBar"
import SingleShowing from "./SingleShowing"
import Map from "./Map"

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
        <div className = "flex-container">
          <div id = "search-results">
            <SingleShowing 
              image={'/image3.png'} 
              name={'Two Bedroom Loft in the Heart of Paris'}
              size={'2 Guests 2 bed 2.5 Bath'}
              rating={'4.6(35)'}
              price={'$76/night'}
            />
            <SingleShowing 
              image={'/image 2.png'} 
              name={'Studio Apartment near the Effiel Tower'}
              size={'2 Guests Studio 1 bed 1 Bath'}
              rating={'4.7(72)'}
              price={'$87/night'}
            />
            <SingleShowing 
              image={'/image3.png'} 
              name={'Two Bedroom Loft in the Heart of Paris'}
              size={'2 Guests 2 bed 2.5 Bath'}
              rating={'4.6(35)'}
              price={'$76/night'}
            />
            <SingleShowing 
              image={'/image 2.png'} 
              name={'Studio Apartment near the Effiel Tower'}
              size={'2 Guests Studio 1 bed 1 Bath'}
              rating={'4.7(72)'}
              price={'$87/night'}
            />
          </div>
          <Map />
        </div>
      </div>
    )
  }
}


export default Search