import React, { Component } from 'react'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// Used logic from Idea Board 2

export default class ReservationForm extends Component {
    state = {
        reservations: [],
        reason_for_visit: '',
        date_of_visit: ''
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const payload = {
            reason_for_visit: this.state.reason_for_visit,
            date_of_visit: this.state.date_of_visit
        }
        event.preventDefault()
        localStorage.setItem("reason", this.state.reason_for_visit)
        localStorage.setItem("date", this.state.date_of_visit)
        this.props.history.push('/user')

        // axios.post('/api/reservations/', payload).then(res => {
        //     console.log(res.data)
        //     this.props.history.push(`/reservations/${res.data._id}`)
        // })
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
                        <input className="form-control" onChange={this.handleChange} value={this.state.reason_for_visit} type="text" name="reason_for_visit" placeholder="Reason for Visit"/>
                    </div>

                    <div className="form-inputs mb-3">
                        <input className="form-control" onChange={this.handleChange} value={this.state.date_of_visit} type="datetime-local" name="date_of_visit" placeholder="Date of Visit"/>
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
