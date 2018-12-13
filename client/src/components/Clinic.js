import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Clinic extends Component {  

    
      render() {
        return (
            <Map google={this.props.google} zoom={12}>
            <Marker onClick ={this.onMarkerClick}
                    name={'Current location'}/>
            
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
            </Map>
     
        );
      }
    }
     
  

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDfJ9Uig5v_Cd8_2_oTeHHR25zBKaNJang")

})(Clinic)