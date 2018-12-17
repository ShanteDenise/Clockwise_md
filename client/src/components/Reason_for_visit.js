import React, { Component } from 'react';
import axios from 'axios';


class Reason_for_visit extends Component {

    state = {


    }
    componentDidMount(){
        axios.get('/api/')
    }
    
    render() {
        return (
            <div>

                
            </div>
        );
    }
}

export default Reason_for_visit;