import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


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
            <div className="card-deck mx-auto img-fluid animated fadeInDown" style={{margin: '2%', width: '30rem', height:'40rem'}}>
            <div className="card">
            <img class="card-img mt-3 " src="https://upload.wikimedia.org/wikipedia/en/a/a4/Cincinnati_Children%27s_Hospital_Medical_Center_Logo.png" style={{margin: '50px', width: '20rem', height:'5rem'}} alt="Placeholder" alt="Card image cap"></img>
            <div className="card-body">


                
        <form  onSubmit={this.handleSubmit}>

                    <div className="form-group" >
                    <div className="form-inputs mb-3">
                        <input className="form-control" onChange={this.handleChange} value={this.state.newUser.first_name} type="text" name="first_name" placeholder="First Name"/>
                    </div>

                    <div className="form-inputs mb-3">

                        <input className="form-control" onChange={this.handleChange} value={this.state.newUser.last_name} type="text" name="last_name" placeholder="Last Name"/>
                        
                    </div>

                    <div className="form-inputs mb-3">
                        <input className="form-control" onChange={this.handleChange} value={this.state.newUser.date_of_birth} type="date" name="date_of_birth" placeholder="Date of Birth"/>
                    </div>

                    <div className="form-inputs m-b"> 
                        <input className="form-control" onChange={this.handleChange} value={this.state.newUser.email} type="text" name="email" placeholder="Email" />
                    </div>

                    <h4 className="name2">We'll send you a text message </h4>

                    <select class="form-control" id="exampleForm"> 
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                    <option>45</option>
                    <option>60</option>
                     </select>

                     <h4 className="name2"> minutes before your visit </h4>
                    <button type="submit" class="button-accept">Reserve My Spot</button>
                </div>
                </form>



                </div>
                </div>
                </div>

         </div>
           
        );
    }
}

export default User;