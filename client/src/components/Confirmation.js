// import React, { Component } from 'react';
// import Clinic from '../components/Clinic'
// import logo from '../childrens-logo-new.png';
// import '../App.css';

// class Confirmation extends Component {
//     render() {
//         return (
// <div className="card-deck mx-auto" style={{margin: '5%', width: '30rem', height:'35rem'}}>
//   <div className="card">
//   <img class="card-img-top" src="https://www-base.clockwisemd.com/assets/logo_color@2x.png" width="255" height="57" alt="Clockwise.MD Logo" alt="Card image cap"></img>
//     <div className="card-body">
//       <h5 className="card-title"></h5>
//       <p className="card-text">Just choose the reason</p>
//       <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
//     <Clinic {...this.props.match.params.id}/>
//   </div>
  
//   </div>
           
//         );
//     }
// }

// export default Confirmation;



import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {Link} from "react-router-dom";
require('dotenv').config()


class Confirmation extends Component { 
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
        const clinicId = this.props.match.params.id
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
            const singleVenue = response.data.response.groups[0].items.filter(myVenue => {
                return myVenue.venue.id === clinicId
            })
            this.setState({
                //After getting the response render the Map
             venues: singleVenue
            }, this.renderMap())
          })
          .catch(error => {
            console.log("ERROR!! " + error)
          })
    
      }
    
    initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById('map-single'), {
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
            <div className="card-deck mx-auto" style={{margin: '5%', width: '30rem', height:'35rem'}}>
            <div className="card">
            <div className="card-body">
            <h5 className="card-title"></h5>

            <div id="map-single"></div>
            <div id="map-address"></div>
            
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
                    </div>
                    
                    </li>
                ))}
            </ul>
            </div>
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
    

export default Confirmation;

