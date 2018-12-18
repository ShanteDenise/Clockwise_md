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
            <div className="card-deck mx-auto img-fluid animated fadeInDown" style={{margin: '2%', width: '30rem', height:'30rem'}}>
            <div className="card">
            <img class="card-img mt-4 " src="https://upload.wikimedia.org/wikipedia/en/a/a4/Cincinnati_Children%27s_Hospital_Medical_Center_Logo.png" style={{margin: '50px', width: '20rem', height:'6rem'}} alt="Placeholder" alt="Card image cap"></img>
            <div className="card-body">
            <div>
                <form onSubmit={this.handleSubmit} >
                    
                    <div className="form-inputs mb-3 w-60">
                        <input className="form-control" onChange={this.handleChange} value={this.state.form_items.reason_for_visit} type="text" name="reason for visit" placeholder="Reason for Visit"/>
                    </div>

                    <div className="form-inputs mb-3">
                        <input className="form-control" onChange={this.handleChange} value={this.state.form_items.date_of_visit} type="datetime-local" name="date of visit" placeholder="Date of Visit"/>
                    </div>

                    <button className="button-accept" type="submit">Next</button>
                </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
