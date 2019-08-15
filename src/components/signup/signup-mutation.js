import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_USER_MUTATION = loader('../graphql/create-user-mutation.graphql');

function SignupMutation(props){
    let { username, password, first_name, last_name, handleSubmit } = props

    return (
        <Mutation
            mutation={CREATE_USER_MUTATION}
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