import React, { Component } from 'react'
import axios from 'axios';

// Used logic from Idea Board 2

export default class ReservationForm extends Component {
    state = {
        reservations: [],
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
            this.props.history(`/reservations/${res.data._id}`)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="reason_for_visit">Reason for Visit </label>
                        <input onChange={this.handleChange} value={this.state.form_items.reason_for_visit} type="text" name="reason for visit" />
                    </div>
                    <div>
                        <label htmlFor="date_of_visit">Date of Visit</label>
                        <input onChange={this.handleChange} value={this.state.form_items.date_of_visit} type="text" name="date of visit" />
                    </div>
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }
}
