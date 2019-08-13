import React from "react";
import { Menu, Icon, Segment } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import { AUTH_TOKEN } from "../../constants";
import NavBarAuthView from "./nav-bar-auth-view";
import NavBarDefaultView from "./nav-bar-default-view";
import Texts from '../texts'
import Translations from '../translations'


class Navbar extends React.Component {

    state = {
        loggedIn: false
    }

    handleAuth = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)

        return (
            <Segment>
                <Menu borderless>
                    <Menu.Item 
                        header
                        as={Link}
                        to='/'
                    >
                        <Icon name='flag' />
                        glot
                    </Menu.Item>
                    { authToken
                        ? 
                            <NavBarAuthView handleAuth={this.handleAuth} /> 
                        :
                            <NavBarDefaultView handleAuth={this.handleAuth} />
                    }
                </Menu>
                <Route path="/texts" component={Texts} />
                <Route path="/translations" component={Translations} />
            </Segment>
        )
    }
}

export default Navbar