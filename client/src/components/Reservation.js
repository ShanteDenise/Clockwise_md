import React, { Component } from 'react'
import axios from 'axios'
require('dotenv').config()


export default class Reservation extends Component {
  state = {
    reservations: {},
    venues: []
  }

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value })
}

  componentDidMount() {
    const id = this.props.match.params.id

    axios.get(`/api/reservations/${id}`).then(res => {
      this.setState({
        reservations: res.data,
      })
    })
  }
  render() {
    return (
      <div>

        <div key={this.state.reservations.id}>
          <h3>{this.state.reservations.date_of_visit} </h3>
          <h4>
            {/* {this.state.clinics.name}
            {this.state.clinics.address} */}
          </h4>
          <button>Start My Paperwork </button>
        </div>
      </div>
    )
  }
}


