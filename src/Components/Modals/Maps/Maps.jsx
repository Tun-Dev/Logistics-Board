import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          style={{
            width: "300px",
            height: "240px",
          }}
          zoom={10}
          initialCenter={{
            lat: 6.57712,
            lng: 3.36682,
          }}
        >
          <Marker />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API,
  version: 3.48,
})(Maps);
