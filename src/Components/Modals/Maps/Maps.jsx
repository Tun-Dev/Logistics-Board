import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class Maps extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    style={{ width: '380px', height: '240px' }}
                    zoom={10}
                    initialCenter={
                        {
                            lat: 6.577120,
                            lng: 3.366820,
                        }
                    }
                >
                    <Marker />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAP_API),
    version: 3.48
})(Maps);