import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {  InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '100%'
};




export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    
    return (
      <React.Fragment>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 48.8566, lng: 2.3522 }}
      >
        <Marker className="cursorStyles"
          onClick={this.onMarkerClick}
          name={'NAME OF HOUSE OR AREA'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
      </React.Fragment>
    );

}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG5jzMd7mTDiza20IeHZBhM1ZS_i_We-Y'
})(MapContainer);
// {this.props.lat}
// {this.props.long}