import React from "react";
import LoginForm from "./login-form";
import { AUTH_TOKEN } from "../../constants";

class LoginContainer extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = userData => {
        this.saveUserData(userData.token)
        this.setState({
            username: '',
            password: ''
        }, () => this.props.handleLogin())
    }

    saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {
        let { username, password } = this.state

        return (
            <LoginForm
                username={username}
                password={password}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default LoginContainer