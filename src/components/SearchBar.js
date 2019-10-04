import React from "react"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    date: false,
    guest: false,
    workTrip: false,
    typeOfPlace: false,
    price: false,
    instantBook: false,
  }

  closeForms = () =>{
      this.setState({
        date: false,
        guest: false,
        workTrip: false,
        typeOfPlace: false,
        price: false,
        instantBook: false,
      })
      
      this.displayBoxes();
      document.getElementById("modal").classList.add("hidden")
  }

  setTrue = (e) =>{
    const name = e.target.dataset.name; 
    this.setState({
      [name]: !this.state[name]
    }, this.displayBoxes())
  }

  displayBoxes = () =>{
    let showModal  = false;
    Object.keys(this.state).forEach((eachKey)=>{
      const elemClasses = document.getElementById(eachKey).classList
      // console.log(elemClasses);
      if(this.state[eachKey]){
        elemClasses.remove("hidden")
        showModal = true;
      }else{
        elemClasses.add("hidden")
      }
    })

    if(showModal){
      document.getElementById("modal").classList.remove("hidden")
    }
  }

  render() {
    return (
    <div>
      <ul className = "search-bar">
        <li onClick = {(e) => this.setTrue(e)}  data-name = "date">Dates</li>
        <li onClick = {(e) => this.setTrue(e)}  data-name = "guest">Guests</li>
        <li onClick = {(e) => this.setTrue(e)}  data-name = "workTrip">Work Trip</li>
        <li onClick = {(e) => this.setTrue(e)}  data-name = "typeOfPlace">Type of Place</li>
        <li onClick = {(e) => this.setTrue(e)}  data-name = "price">Price</li>
        <li onClick = {(e) => this.setTrue(e)}  data-name = "instantBook">Instant Book</li>
        <li onClick = {(e) => {alert("Why you do this?")}}>More Filter</li>
      </ul>
      <div id = "date" className = "hidden form-box">
        <label for="start-date">Start Date</label>
        <input type="date" name="start-date" id = "start-date"/>
        <br />

        <label for="end-date">End Date</label>
        <input type="date" name="end-date" id="end-date"/>
        <br />
      </div>
      <div id = "guest" className = "hidden form-box">
        <label for="guests">Guests</label>
        <input type="number" name="guests" id="guests"/>
        <br />      
      </div>
      <div id = "workTrip" className = "hidden form-box">
        <label for="work">Work Trip</label>
        <select name="work" id="work">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>
        <br />
      </div>
      <div id = "typeOfPlace" className = "hidden form-box">   
        {/* <label for="room">Room Type</label>
        <br/> */}
        <label>Entire Place</label><input  type="checkbox" name="room" value="Entire-home/apt"/><br/>
        <label>Apartment</label><input  type="checkbox" name="room" value="Entire-home/apt"/><br/>
        <label>Private Room</label><input  type="checkbox" name="room" value="Private-room"/><br/>
        <label>Shared Room</label>
        <input  type="checkbox" name="room" value="Shared-room"/><br/>
        <br />     
      </div>
      <div id = "price" className = "hidden form-box">     
        {/* <label for="price-range">Price Range</label> */}
        <div id="price-range">
        <label for="min-price" >Starting Price</label>
        <input type="number" name="min-price" id="min-price"/>
        <br />

        <label for="min-price">Max Price</label>
        <input type="number" name="max-price" id="max-price"/>
        </div>
        <br />   
      </div>
      <div id = "instantBook" className = "hidden form-box">
        <label for="instant">Instant Book</label>
        <select name="instant" id="instant">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>
        <br />    
      </div>
      <div id="modal" onClick = {this.closeForms}className="hidden">
      </div>
    </div>
    )
  }
}


export default SearchBar