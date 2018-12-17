import React, { Component } from 'react'
import Axios from 'axios';

// Used logic from Idea Board 2

export default class ReservationForm extends Component {
    state = {
        form_items: {
            reason_for_visit: '',
            date_of_visit: ''
        }
    }

    handleChange = (event) => {
        const reserveForm = { ...this.state.form_items }

        reserveForm[event.target.name] = event.target.value
        this.setState({ form_items: reserveForm })
    }

    handleSubmit = (event) => {
        axios.post('/api/reservations', this.state.reserveForm).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
