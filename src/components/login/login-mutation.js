import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const LOGIN_USER_MUTATION = loader('../graphql/login-user-mutation.graphql');

function LoginMutation(props){

    let { username, password, handleSubmit } = props

    return (
        <Mutation
            mutation={LOGIN_USER_MUTATION}
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