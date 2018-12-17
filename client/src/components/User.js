import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';


class User extends Component {

    state = {
        user: {},
        newUser: {
            first_name: '',
            last_name: '',
            date_of_birth: '',
            email: ''
        }

    }

    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = { ...this.state.newUser }
        updatedNewUser[event.target.name] = event.target.value
        this.setState({ newUser: updatedNewUser })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users').then(res =>
            console.log(res.data))
    }
    getAllUsers = () => {
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <div className="card-deck mx-auto img-fluid animated fadeInDown" style={{ margin: '2%', width: '30rem', height: '40rem' }}>
                    <div className="card">
                        <img class="card-img mt-3 " src="https://upload.wikimedia.org/wikipedia/en/a/a4/Cincinnati_Children%27s_Hospital_Medical_Center_Logo.png" style={{ margin: '50px', width: '20rem', height: '5rem' }} alt="Placeholder" alt="Card image cap"></img>
                        <div className="card-body">



                            <form class="userForm" onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="first_name"> First Name </label>
                                    <input onChange={this.handleChange} value={this.state.newUser.first_name} type="text" name="first_name" />
                                </div>

                                <div className="form-inputs mb-3">

                                    <input className="form-control" onChange={this.handleChange} value={this.state.newUser.last_name} type="text" name="last_name" placeholder="Last Name" />

                                </div>

                                <div className="form-inputs mb-3">
                                    <input className="form-control" onChange={this.handleChange} value={this.state.newUser.date_of_birth} type="date" name="date_of_birth" placeholder="Date of Birth" />
                                </div>

                                <div className="form-inputs m-b">
                                    <input className="form-control" onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" placeholder="Email" />
                                </div>

                                <div>***** We'll send you a text message ***** </div>

                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>15</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>45</option>
                                    <option>60</option>
                                </select><div> minutes before your visit </div>

                                <button type="submit" class="button-accept">Reserve My Spot</button>
                </div>
                </form>

                        <button> <Link to="/clinic">Reserve My Spot! </Link> </button>


                    </div>
                </div>
            </div>

         </div >
           
        );
    }
}

export default User;