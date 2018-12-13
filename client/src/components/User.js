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

                {/* CREATE A DIV AND FORM TO ENTER THE BELOW INFORMATION  */}
                {/* this area should render the user's information for:
            
            First Name:
            Last Name:
            Date of Birth:
            Email: 
            "We'll send you a text message"
            _____ minutes before my visit
            Reserve My Spot"  */}

            <div>

                
                {/* <img src={this.state.user.first_name} alt=""/> */}
                {/* <h1> {this.state.user.first_name} </h1>
                <h1> {this.state.user.last_name} </h1>
                <h1> {this.state.user.date_of_birth} </h1>
                <h1> {this.state.user.email} </h1> */}




            </div>
            </div>
        );
    }
}

export default User;