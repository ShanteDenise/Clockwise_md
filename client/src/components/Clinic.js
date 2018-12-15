import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from "react-router-dom";
require('dotenv').config()


class Clinic extends Component { 
    state = {
        venues: []
      } 
      componentDidMount() {
        this.getVenues()
      } 
      renderMap = () => {
        Script(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS}&callback=initMap`)
        window.initMap = this.initMap
      }
       
      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          client_id: process.env.REACT_APP_CLIENT_FOURSQUARE,
          query: "clinics",
          near: "Georgia",
          v: "20182507"
        }
       
        
        axios.get(endPoint + new URLSearchParams(parameters))
          .then(response => {
            this.setState({
                //After getting the response render the Map
             venues: response.data.response.groups[0].items
            }, this.renderMap())
          })
          .catch(error => {
            console.log("ERROR!! " + error)
          })
    
      }
    
    initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.753746, lng: -84.386330 },
          zoom: 8
        })  

        //Info Window
        var infowindow = new window.google.maps.InfoWindow()
        
        //Loop through map venues and display content requested
        this.state.venues.map(myVenue => {
            var contentString = `${myVenue.venue.name}`


            //Create a Marker
            var marker = new window.google.maps.Marker({
                position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
                map: map,
                title: myVenue.venue.name,
                
            })

            //On Click Open info Window
            marker.addListener('click', function(){
                //Change content
                infowindow.setContent(contentString)
                infowindow.open(map, marker);
            })

        })

    }
      
      render() {
        return (
          <main>
                <div className="container">
            <div id="map"></div>
            <div id="map-address">
            <h1 id="title">Save My Spot!</h1>
            <ul>
            {/* id, name, location, categories, photos, venuePage} */}
                {this.state.venues.map((myVenue, index) => (
                    <li key={index} className="list-group-item">
                    <div className="flexed">
                    <div>
                    <div className="name">{myVenue.venue.name}</div>
                        {myVenue.venue.location.address}
                        <br/>
                        {myVenue.venue.location.city},
                        {myVenue.venue.location.state} 
                        {' '}
                        {myVenue.venue.location.postalCode}
                        <br/>
                        Hours of Operation: 9:00am - 6:00pm                  
                    </div>
                        <Link to={`/clinic/${myVenue.venue.id}`}><img src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-1/512/Add_create_new_math_sign_cross_plus-512.png" alt="plus icon" className="icon"></img></Link>
                    </div>
                    </li>
                ))}
            </ul>


            </div>


                </div>
          </main>
        )
      }
    }
    
    function Script(url) {
      var index  = window.document.getElementsByTagName("script")[0]
      var script = window.document.createElement("script")
      script.src = url
      script.async = true
      script.defer = true
      index.parentNode.insertBefore(script, index)
    }
    

export default Clinic;

