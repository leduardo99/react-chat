import React, { Component } from 'react';

// import { Container } from './styles';

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            currentScreen: ""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log(name, value)

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Registro</h2>
                    <form onSubmit={this.onSubmit}>
                        <label>Digite seu usuário:
                            <input
                                type="text"
                                name="username"
                                onChange={(event) => this.onChange(event)}
                            />
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default UsernameForm 
