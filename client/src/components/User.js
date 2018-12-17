import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class User extends Component {

    state = {
        users: {},
        newUser: {
            first_name: '',
            last_name: '',
            date_of_birth: '',
            email: ''
        }

    }

    handleChange = (event) =>{
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = {...this.state.newUser}
        updatedNewUser[event.target.name] = event.target.value
        this.setState({ newUser: updatedNewUser })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('').then(res =>
        console.log(res.data))
    }
    getAllUsers = () => {
        this.getAllUsers()
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.fetchUser(userId)
    }

    fetchUser = async (userId) => {
        try {
            const userResponse = await axios.get('')
            await this.setState({
                // clinic: clinicResponse.data,
                // reservations: reservationsResponse.data.reservations,
            })
        }
        catch (error) {
                console.log(error)
                await this.setState({error: error.message})
        }
        
    }
    render() {
        return (
            <div>
               


<form onSubmit={this.handleSubmit}>
<div>
    <label htmlFor="first_name"> First Name </label>
    <input onChange={this.handleChange} value={this.state.newUser.first_name} type="text" name="first_name"/>
</div>

<div>
    <label htmlFor="last_name"> Last Name </label>
    <input onChange={this.handleChange} value={this.state.newUser.last_name} type="text" name="last_name"/>
</div>

<div>
    <label htmlFor="date_of_birth"> Date of Birth </label>
    <input onChange={this.handleChange} value={this.state.newUser.date_of_birth} type="text" name="date_of_birth"/>
</div>

<div>
    <label htmlFor="email"> Email </label>
    <input onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email"/>
</div>

<button type="submit"> Reserve My spot</button>

</form>


            <div>
<h1> TEST FOR COMMIT </h1>





            </div>
            </div>
        );
    }
}

export default User;