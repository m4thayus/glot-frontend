import React from "react";
import { Menu, Icon, Button, Segment } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import Texts from '../texts'
import Translations from '../translations'


class Navbar extends React.Component {
    render() {
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
                        <Button.Group>
                            <Button>Sign Up</Button>
                            <Button.Or />
                            <Button primary>Log In</Button>
                        </Button.Group>
                    </Menu.Item>
                </Menu>

                <Route path="/texts" component={Texts} />
                <Route path="/translations" component={Translations} />
            </Segment>
        )
    }
}

export default Navbar