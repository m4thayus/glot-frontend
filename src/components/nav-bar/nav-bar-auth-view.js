import React from "react"
import { withApollo } from 'react-apollo'
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from "../../constants";

function NavBarAuthView(props){
    let { user, handleAuth } = props
    return (
        <React.Fragment>
            <Menu.Item
                name='Request A Translation'
                as={Link}
                to='/texts/new'
            />
            <Menu.Item
                name='Add A Translation'
                as={Link}
                to='/texts'
            />
            <Menu.Item
                name='Review Translations'
                as={Link}
                to={{
                    pathname: `/translations/review`,
                    state: {
                        user_id: user.id
                    }
                }}
            />
            <Menu.Item position='right'>
                <Button.Group>
                    <Button primary as={Link} to="/profile">
                        <Icon name='user outline' />{user.firstName}
                    </Button>
                    <Button color='green' as={Link} to="/translations">
                        Translations
                    </Button>
                    <Button
                        onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                            props.client.resetStore()
                            handleAuth()
                        }}
                    >
                        Log Out
                    </Button>
                </Button.Group>
            </Menu.Item>
        </React.Fragment>
    )
}

export default withApollo(NavBarAuthView)