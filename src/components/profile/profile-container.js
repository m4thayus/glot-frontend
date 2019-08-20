import React from "react";
import { Container } from "semantic-ui-react";
import ProfileView from "./profile-view";

class ProfileContainer extends React.Component {


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
        let { user } = this.props
        let { username, password, last_name, first_name } = this.state
        return (
            <Container>
                <ProfileView 
                    user={user}
                    username={username}
                    password={password}
                    last_name={last_name}
                    first_name={first_name}
                    handleChange={this.handleChange}
                />
            </Container>
        )
    }
}

export default ProfileContainer