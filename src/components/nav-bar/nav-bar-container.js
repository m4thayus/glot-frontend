import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";


class Navbar extends React.Component {
    render() {
        return (
            <Menu tabular>
                <Menu.Item header>
                    <Icon name='flag' />
                    Glot
                </Menu.Item>
                <Menu.Item
                    name='home'
                    // active={activeItem === 'aboutUs'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='texts'
                    // active={activeItem === 'aboutUs'}
                    // onClick={this.handleItemClick}
                />
                <Menu.Item 
                    position='right'
                >
                    <Button.Group>
                        <Button size='mini'>Sign Up</Button>
                        <Button.Or />
                        <Button size='mini' primary>Log In</Button>
                    </Button.Group>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Navbar