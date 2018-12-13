import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {

    state = {
        clinics: {},
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
                clinics: clinicResponse.data,
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
                
            </div>
        );
    }
}

export default User;