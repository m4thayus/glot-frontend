import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const UPDATE_USER_MUTATION = loader('../graphql/update-user-mutation.graphql');

function UserMutation(props){
    return (
        <div>Mutate</div>
    )
}

export default UserMutation