import React from "react"
import ProfileForm from "../profile-form";
import { Segment, Modal, Button, Form, Header } from "semantic-ui-react";
import KnownLanguageLabel from "./known-language-label";
import KnownLanguageForm from "../known-language-form";

function ProfileView(props){
    let { user, languages, username, password, last_name, first_name, handleChange } = props

    return (
        <Segment.Group raised>
            <Segment basic>
                <Header size="large">Your Account</Header>
            </Segment>
            <Segment>
                <Form>
                    <Form.Input
                        disabled
                        label='First Name'
                        placeholder='First Name'
                        name='first_name'
                        value={first_name}
                    />
                    <Form.Input
                        disabled
                        label='Last Name'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                    />
                    <Form.Input
                        disabled
                        label='Username'
                        placeholder='Username'
                        name='username'
                        value={user.username}
                    />
                    <Form.Input
                        disabled
                        label='Password'
                        placeholder='Password'
                        name='password'
                        type='password'
                        value='a long string that looks right'
                    />
                </Form>
            </Segment>
            <Segment>
                <Header>Your Known Languages</Header>
                {user.knownLanguages.map(known => <KnownLanguageLabel key={known.id} known={known} />)}
            </Segment>
            <Segment textAlign='right'>
                <Button.Group>
                    <Modal 
                        closeIcon
                        trigger={<Button>Edit Profile</Button>}>
                        <ProfileForm
                            username={username}
                            password={password}
                            last_name={last_name}
                            first_name={first_name}
                            handleChange={handleChange}
                        />
                    </Modal>
                    <Button.Or />
                    <Modal 
                        closeIcon
                        trigger={<Button primary>Edit Known Languages</Button>}>
                        <KnownLanguageForm 
                            known={user.knownLanguages}
                            languages={languages}
                        />
                    </Modal>
                </Button.Group>
            </Segment>
        </Segment.Group>
    )
}

export default ProfileView