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

export default LoginMutation