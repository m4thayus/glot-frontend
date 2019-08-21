import React from "react"
import { Mutation } from "react-apollo";
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const VOTE_MUTATION = loader('../graphql/vote-mutation.graphql');

function UpvoteMutation(props){
    let {translation, handleSubmit} = props
    return (
        <Mutation
            mutation={VOTE_MUTATION}
            variables={{up: true, translation_id: parseInt(translation.id, 10)}}
            onCompleted={data => handleSubmit(data)}
            onError={error => console.log(error)}
        >
            {mutation => (
                <Button 
                    positive
                    onClick={mutation}
                >
                    Up
                </Button>
            )}
        </Mutation>
    )
}

export default UpvoteMutation