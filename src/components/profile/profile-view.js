import React from "react"
import ProfileFormView from "./profile-form-view";
import { Segment, Modal, Button, Form, Divider, Header } from "semantic-ui-react";
import LanguageLabels from "./language-labels";
import LanguageFormView from "./language-form-view";

function ProfileView(props){
    let { user, username, password, last_name, first_name, handleChange } = props

    console.log(user)

    return (
        <Segment raised>
            <Header>Your Account</Header>
            <Button.Group>
                <Modal 
                    closeIcon
                    trigger={<Button primary floated="right">Edit Profile</Button>}>
                    <ProfileFormView 
                        username={username}
                        password={password}
                        last_name={last_name}
                        first_name={first_name}
                        handleChange={handleChange}
                    />
                </Modal>
                <Modal 
                    closeIcon
                    trigger={<Button primary>Edit Known Languages</Button>}>
                    <LanguageFormView 
                        known={user.knownLanguages}
                    />
                </Modal>
            </Button.Group>
            <Form>
                <Form.Input
                    disabled
                    label='First Name'
                    placeholder='First Name'
                    name='first_name'
                    value={first_name}
                    onChange={handleChange}
                />
                <Form.Input
                    disabled
                    label='Last Name'
                    placeholder='Last Name'
                    name='last_name'
                    value={last_name}
                    onChange={handleChange}
                />
                <Form.Input
                    disabled
                    label='Username'
                    placeholder='Username'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
                <Form.Input
                    disabled
                    label='Password'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value='a long string that looks right'
                    onChange={handleChange}
                />
            </Form>
            <Divider horizontal />
            <Header>Your Known Languages</Header>
            {user.knownLanguages.map(known => <LanguageLabels key={known.id} known={known} />)}
        </Segment>
    )
}

export default ProfileView