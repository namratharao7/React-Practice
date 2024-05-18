import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state= {
            message: 'Welcome'
        }
    }

    changeMessage() {
        if (this.state.message === 'Welcome') {
            this.setState({
                message: 'Thank you'
            })
        } else {
            this.setState({
                message: 'Welcome'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Toggle Message</button>
            </div>
        )
    }
}

export default Message;