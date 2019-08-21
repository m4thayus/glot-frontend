import React from "react";
import { Container } from "semantic-ui-react";
import ProfileView from "./profile-view";

class ProfileContainer extends React.Component {

    render() {
        let { user, languages } = this.props
        return (
            <Container>
                <ProfileView 
                    user={user}
                    languages={languages}
                />
            </Container>
        )
    }
}

export default ProfileContainer