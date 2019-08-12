import React from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from "semantic-ui-react";

const SIGNUP_MUTATION = gql`
    mutation CreateUserMutation($username: String!, $password: String!, $first_name: String!, $last_name: String!) {
        createUser(
            firstName: $first_name,
            lastName: $last_name,
            authProvider: {
                username: {
                    username: $username,
                    password: $password
                }
            }
        ) {
            token
            user {
                id
            }
        }
    }
`

function SignupMutation(props){
    let { username, password, first_name, last_name, handleSubmit } = props

    return (
        <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{ username, password, first_name, last_name }}
            onCompleted={data => handleSubmit(data)}
            onError={error => console.log(error)}
        >
            {mutation => (
                <Button 
                    type='submit'
                    onClick={mutation}
                    color='green'
                >
                    Submit
                </Button>

            )}
        </Mutation>
    )
}

export default SignupMutation