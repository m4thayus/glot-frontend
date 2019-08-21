import React from "react";
import ProfileFormView from "./profile-form-view";

class ProfileFormContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            last_name: props.user.lastName,
            first_name: props.user.firstName
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let { username, password, last_name, first_name } = this.state

        return (
            <ProfileFormView 
                username={username}
                password={password}
                last_name={last_name}
                first_name={first_name}
                handleChange={this.handleChange}
            />
            
        )
    }
}

export default ProfileFormContainer