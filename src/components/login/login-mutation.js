import React from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from "semantic-ui-react";

const LOGIN_MUTATION = gql`
    mutation LoginUserMutation($username: String!, $password: String!) {
        loginUser(
            username: {
                username: $username,
                password: $password
        }) 
        {
            token
            user {
                id
            }
        }
    }
`

function LoginMutation(props){

    let { username, password, handleSubmit } = props

    return (
        <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ username, password }}
            onCompleted={data => handleSubmit(data)}
        >
            {mutation => (
                <Button 
                    type='submit'
                    onClick={mutation}
                >
                    Submit
                </Button>

            )}
        </Mutation>
    )
}

export default LoginMutation