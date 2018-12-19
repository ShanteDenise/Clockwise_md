import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
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

  handleClick = () => {
    localStorage.setItem("clinic", JSON.stringify(this.state.venues))
    this.props.history.push('/reservation')

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
      center: { lat: 33.753746, lng: -84.386330 },
      zoom: 8
    })

    //Info Window
    var infowindow = new window.google.maps.InfoWindow()


    //Loop through map venues and display content requested
    this.state.venues.map(myVenue => {
      var contentString = `${myVenue.venue.name}`


      //Create a Marker
      var marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
        map: map,
        title: myVenue.venue.name,
      })

      //On Click Open info Window
      marker.addListener('click', function () {
        //Change content
        infowindow.setContent(contentString)
        infowindow.open(map, marker);
      })
    })
  }

  render() {
    return (
      <main>
        <div className="card-deck mx-auto img-fluid animated fadeInDown" style={{ margin: '2%', width: '30rem', height: '40rem' }}>
          <div className="card">
            <img class="card-img mt-3 " src="https://upload.wikimedia.org/wikipedia/en/a/a4/Cincinnati_Children%27s_Hospital_Medical_Center_Logo.png" style={{ margin: '50px', width: '20rem', height: '5rem' }} alt="Placeholder" alt="Card image cap"></img>
            <div className="card-body">
              <div id="map-single"></div>
              <div id="map-address"></div>

              <ul>
                {/* id, name, location, categories, photos, venuePage} */}
                {this.state.venues.map((myVenue, index) => (
                  <li key={index} className="list-group">
                    <div className="flexed2">
                      <div>
                        <div className="name2 text-left">{myVenue.venue.name}</div>
                        <div className="address text-left">{myVenue.venue.location.address}
                          {'. '}
                          {myVenue.venue.location.city},
                        {myVenue.venue.location.state}
                          {' '}
                          {myVenue.venue.location.postalCode}
                          <br />
                        </div>
                        <p className="text-left">Just choose the reason and time that you'd <br />
                          like to come in. Please note, this does not guarantee an appointment <br />
                          time but it will receive a spot for you in our patient queue. Once you have <br />
                          saved your spot, we will give you an <br /> opportunity to get a jump start on <br />
                          your registration</p>
                        <button onClick={this.handleClick} className="button-accept">Accept</button>
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
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default Confirmation;

