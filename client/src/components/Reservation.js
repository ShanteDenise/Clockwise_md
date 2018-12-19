import React, { Component } from 'react'
import axios from 'axios'
require('dotenv').config()


export default class Reservation extends Component {
  state = {
    reason_for_visit: '',
    date_of_visit: '',
    reservations: {},
    user: {},
    venues: []
  }

  
  handleSubmit = (event) => {
    axios.get('/api/users/').then(res => {
      const payload = {
        reason_for_visit: localStorage.getItem('reason'),
        date_of_visit: localStorage.getItem('date'),
        clinic: localStorage.getItem('clinic'),
        userData: res.data.id
      }
    })


    const id = this.props.match.params.id
    axios.get(`/api/reservations/${id}`).then(res => {
      this.setState({
        reservations: res.data,
      })
    })
  }
  
  handleDelete = (id) => {
    console.log('deleted')
    axios.delete(`/api/reservations/${id}`).then(() => {
      console.log('delete confirmed')
      this.alert(`Are you sure you would like to cancel your reservation?`).then(res => {
        if (this.res) {
          this.handleDelete()
        }
      })
    })
  }


  componentDidMount() {    
    this.handleSubmit()
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
          <button onClick={() => this.handleDelete()}>Cancel Reservation?</button>
        </div>
      </div>
    )
  }
  
}


