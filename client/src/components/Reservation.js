import React, { Component } from 'react'
import axios from 'axios'
import ReservationForm from './ReservationForm';


export default class Reservation extends Component {
  state = {
    reservations: {},
    clinics: {},
    users: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id

    axios.get(`/api/reservations/${id}`).then(res => {
      this.setState({
        reservations: res.data,
        clinics: res.data.clinics,
        users: res.data.users
      })
    })
  }
  render() {
    return (
      <div>

        <h1>Hello World</h1>
        <div key={this.state.reservations.id}>
          <h3>{this.state.reservations.date_of_visit} </h3>
          <h4>
            {this.state.clinics.name}
            {this.state.clinics.address}
          </h4>
          <button>Reserve My Spot </button>
        </div>
        <ReservationForm />
      </div>
    )
  }
}
