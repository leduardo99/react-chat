import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'
import LoginForm from './components/LoginForm'
import ChatScreen from './ChatScreen'

import Axios from "./service/api"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUsername: "",
      currentScreen: "Registro"
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
    this.onLoginSubmitted = this.onLoginSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {

    Axios.post('users', { username })
      .then(response => {
        console.log(response)
        this.setState({
          currentUsername: username,
          currentScreen: "Login"
        })
      })
      .catch(error => console.error(error))
  }

  onLoginSubmitted(username) {

    Axios.post('authenticate', { username })
      .then(response => {
        console.log(response)
        this.setState({
          currentUsername: username,
          currentScreen: "ChatScreen"
        })
      })
      .catch(error => console.error(error))
  }

  render() {
    if (this.state.currentScreen === "Registro") {
      return <UsernameForm onSubmit={this.onUsernameSubmitted}/>
    }

    if (this.state.currentScreen === "Login") {
      return <LoginForm onSubmit={this.onLoginSubmitted} />
    }

    if (this.state.currentScreen === "ChatScreen") {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App
