import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // SHORT CIRCUIT OPERATOR
        return this.state.isLoggedIn && <div>Welcome Namratha</div>

        //TERNARY OPERATOR
        // return this.state.isLoggedIn ? <div>Welcome Namratha</div> : <div>Welcome Guest</div>

        //ELEMENT VARIABLE
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Namratha</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>;


        //IF-ELSE
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Namratha
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     );
        // }

    }
}

export default UserGreeting;