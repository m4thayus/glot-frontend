import React from "react"
import { Form, Modal, Segment } from "semantic-ui-react";
import LoginMutation from "./login-mutation";

function LoginForm(props){
    let { username, password, handleChange, handleSubmit } = props

    return (
        <React.Fragment>
            <Modal.Header>Log In</Modal.Header>
            <Modal.Description>
                <Segment padded='very' basic>
                    <Form>
                        <Form.Input
                            label='Username'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label='Password'
                            placeholder='Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </Form>
                </Segment>
            </Modal.Description>
            <Modal.Actions>
                <LoginMutation username={username} password={password} handleSubmit={handleSubmit} />
            </Modal.Actions>
        </React.Fragment>
    )
}

export default LoginForm