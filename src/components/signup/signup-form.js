import React from "react"
import { Form, Modal, Segment } from "semantic-ui-react";
import SignupMutation from "./signup-mutation";

function SignupForm(props){
    let { username, password, first_name, last_name, handleChange, handleSubmit } = props

    return (
        <React.Fragment>
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Description>
                <Segment padded='very'>
                    <Form>
                        <Form.Input
                            label='First Name'
                            placeholder='First Name'
                            name='first_name'
                            value={first_name}
                            onChange={handleChange}
                        />
                        <Form.Input
                            label='Last Name'
                            placeholder='Last Name'
                            name='last_name'
                            value={last_name}
                            onChange={handleChange}
                        />
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
                <SignupMutation username={username} password={password} handleSubmit={handleSubmit} />
            </Modal.Actions>
        </React.Fragment>
    
    )
}

export default SignupForm