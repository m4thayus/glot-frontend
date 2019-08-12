import React from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from "semantic-ui-react";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

function SignupMutation(props){
    let { username, password, handleSubmit } = props

    return (
        <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{ username, password }}
            onCompleted={data => handleSubmit(data)}
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