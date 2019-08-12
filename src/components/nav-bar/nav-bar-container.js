import React from "react";
import { Menu, Icon, Button, Segment } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import Texts from '../texts'
import Translations from '../translations'
import Login from '../login'
import { AUTH_TOKEN } from "../../constants";


class Navbar extends React.Component {

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
                        !!authToken
                            ? (
                                <Button.Group>
                                    <Button>Sign Up</Button>
                                    <Button.Or />
                                    <Button 
                                        primary
                                        as={Link}
                                        to='/login'
                                    >
                                        Log In
                                    </Button>
                                </Button.Group>
                            ) : (
                                <Button
                                    onClick={() => localStorage.removeItem(AUTH_TOKEN)}
                                >
                                    Log Out
                                </Button>
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