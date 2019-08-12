import React from "react";
import SignupForm from "./signup-form";
import { AUTH_TOKEN } from "../../constants";

class SignupContainer extends React.Component {
    state = {
        username: '',
        password: '',
        last_name: '',
        first_name: ''
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
        })
    }

    saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {
        let { username, password, last_name, first_name } = this.state

        return (
            <SignupForm
                username={username}
                password={password}
                last_name={last_name}
                first_name={first_name}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SignupContainer