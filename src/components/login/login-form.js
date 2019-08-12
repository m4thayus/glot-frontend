import React from "react"
import { Form } from "semantic-ui-react";
import LoginMutation from "./login-mutation";

function LoginForm(props){
    let { username, password, handleChange, handleSubmit } = props

    return (
        <Form>
            <Form.Input
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleChange}
            />
            <Form.Input
                placeholder='Password'
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
            />
            <LoginMutation username={username} password={password} handleSubmit={handleSubmit} />
        </Form>
    )
}

export default LoginForm