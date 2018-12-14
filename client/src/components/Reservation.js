import React, { Component } from 'react'
import axios from 'axios'


export default class Reservation extends Component {
  state = {
    reservations: {},
    clinics: {},
    users: {}
  }

  getAllUserReservations = () => {
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
      </div>
    )
  }
}
