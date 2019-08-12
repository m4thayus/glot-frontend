import React from "react";
import { Menu, Icon, Button, Segment, Modal } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import Texts from '../texts'
import Translations from '../translations'
import Login from '../login'
import Signup from '../signup'
import { AUTH_TOKEN } from "../../constants";


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
                    <Menu.Item
                        name='texts'
                        as={Link}
                        to='/texts'
                    />
                    <Menu.Item
                        name='translations'
                        as={Link}
                        to='/translations'
                    />
                    <Menu.Item 
                        position='right'
                    >
                        {
                        authToken
                            ? (
                                <Button
                                    // color='red'
                                    onClick={() => {
                                        localStorage.removeItem(AUTH_TOKEN)
                                        this.handleAuth()
                                    }}
                                >
                                    Log Out
                                </Button>
                            ) : (
                                <Button.Group>
                                    <Modal
                                        closeIcon
                                        trigger={<Button>Sign Up</Button>}
                                    >
                                        <Signup handleSignup={this.handleAuth} />
                                    </Modal>
                                    <Button.Or />
                                    <Modal 
                                        closeIcon
                                        trigger={<Button primary>Log In</Button>}
                                    >
                                        <Login handleLogin={this.handleAuth} />
                                    </Modal>
                                </Button.Group>
                            )
                        }
                    </Menu.Item>
                </Menu>

                <Route path="/texts" component={Texts} />
                <Route path="/translations" component={Translations} />
                <Route path="/login" component={Login} />
            </Segment>
        )
    }
}

export default Navbar