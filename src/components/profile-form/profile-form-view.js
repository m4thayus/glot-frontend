import React from "react"
import { Segment, Form, Modal } from "semantic-ui-react";
import UpdateUserMutation from "./update-user-mutation";

function ProfileFormView(props){
    let { first_name, last_name, username, password, handleChange } = props

    return (
        <React.Fragment>
            <Modal.Header>Edit Your Profile</Modal.Header>
            <Modal.Description>
                <Segment padded='very' basic>
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
                <UpdateUserMutation
                    username={username}
                    password={password}
                    first_name={first_name}
                    last_name={last_name}
                />
            </Modal.Actions>
        </React.Fragment>
    )
}

export default ProfileFormView