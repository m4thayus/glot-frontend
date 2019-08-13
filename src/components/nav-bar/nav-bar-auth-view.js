import React from "react"
import { Menu, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from "../../constants";

function NavBarAuthView(props){
    let { handleAuth } = props
    return (
        <React.Fragment>
            <Menu.Item
                name='Browse Texts'
                as={Link}
                to='/texts'
            />
            <Menu.Item
                name='My Translations'
                as={Link}
                to='/translations'
            />
            <Menu.Item position='right'>
                <Button.Group>
                    <Button primary>
                        My Profile
                    </Button>
                    <Button
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                            handleAuth(true)
                        }}
                        as={Link}
                        to='/'
                    >
                        Log Out
                    </Button>
                </Button.Group>
            </Menu.Item>
        </React.Fragment>
    )
}

export default NavBarAuthView