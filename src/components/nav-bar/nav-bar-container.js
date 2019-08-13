import React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from "../../constants";
import NavBarDefaultView from "./nav-bar-default-view";
import NavBarAuthQuery from "./nav-bar-auth-query";

class Navbar extends React.Component {

    handleAuth = authSuccessful => {
        if (authSuccessful) {
            this.props.history.push('/')
        }
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)

        return (
            <Container>
                <Menu borderless>
                    <Menu.Item 
                        header
                        as={Link}
                        to='/'
                    >
                        <Icon name='flag' /> glot
                    </Menu.Item>
                    { authToken
                        ? 
                            <NavBarAuthQuery handleAuth={this.handleAuth} /> 
                        :
                            <NavBarDefaultView handleAuth={this.handleAuth} />
                    }
                </Menu>
            </Container>
        )
    }
}

export default Navbar