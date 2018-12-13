import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


class User extends Component {

    state = {
        clinic: {},
        reservations: [],

    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        this.fetchUser(userId)
    }

    fetchUser = async (userId) => {
        try {
            const userResponse = await axios.get('')
            await this.setState({
                clinic: clinicResponse.data,
                reservations: reservationsResponse.data.reservations,
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
                {/* this area should render the user's information:
            
            First Name:
            Last Name:
            Date of Birth:
            Email: 
            "We'll send you a text message"
            _____ minutes before my visit
            Reserve My Spot*/}


 {/* first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    date_of_birth = models.DateField
    email = models.EmailField */}
            <div>
                {/* <img src={this.state.user.first_name} alt=""/> */}
                <h1> {this.state.user.first_name}</h1>




            </div>
            </div>
        );
    }
}

export default User;