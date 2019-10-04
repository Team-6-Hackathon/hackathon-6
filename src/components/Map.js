import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 48.8566,
         lng: 2.3522

        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG5jzMd7mTDiza20IeHZBhM1ZS_i_We-Y'
})(MapContainer);

// {this.props.lat}
// {this.props.long}