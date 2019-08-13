import React from "react"
import { Button, Modal, Menu } from "semantic-ui-react";
import Login from '../login'
import Signup from '../signup'

function NavBarDefaultView(props){
    let { handleAuth } = props
    return (
        <React.Fragment>
            <Menu.Item position='right'>
                <Button.Group>
                    <Modal
                        closeIcon
                        trigger={<Button>Sign Up</Button>}
                    >
                        <Signup handleSignup={handleAuth} />
                    </Modal>
                    <Button.Or />
                    <Modal 
                        closeIcon
                        trigger={<Button primary>Log In</Button>}
                    >
                        <Login handleLogin={handleAuth} />
                    </Modal>
                </Button.Group>
            </Menu.Item>
        </React.Fragment>
    )
}

export default NavBarDefaultView