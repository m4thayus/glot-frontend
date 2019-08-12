import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import Texts from '../texts'
import Translations from '../translations'


class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu tabular>
                    <Menu.Item 
                        header
                        as={Link}
                        to='/'
                    >
                        <Icon name='flag' />
                        Glot
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
            </React.Fragment>
        )
    }
}

export default Navbar