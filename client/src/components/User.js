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
        axios.post('/components/User').then(res =>
            console.log(res.data))
    }
    getAllUsers = () => {
        this.getAllUsers()
    }

    render() {
        return (
            <div>

                ********STTUUFFFFFFFFFFFFFFF**********
                
<form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="first_name"> First Name </label>
                        <input onChange={this.handleChange} value={this.state.newUser.first_name} type="text" name="first_name" />
                    </div>

                    <div>
                        <label htmlFor="last_name"> Last Name </label>
                        <input onChange={this.handleChange} value={this.state.newUser.last_name} type="text" name="last_name" />
                    </div>

                    <div>
                        <label htmlFor="date_of_birth"> Date of Birth </label>
                        <input onChange={this.handleChange} value={this.state.newUser.date_of_birth} type="text" name="date_of_birth" />
                    </div>

                    <div>
                        <label htmlFor="email"> Email </label>
                        <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" />
                    </div>

                    <div>We'll send you a text message </div>

                    <div> minutes before your visit </div>



                    <Link to="/clinic">Reserve My Spot! </Link>


                </form>

            </div>
        );
    }
}

export default User;