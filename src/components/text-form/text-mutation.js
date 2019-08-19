import React from "react"
import { Mutation } from "react-apollo";
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_TEXT_MUTATION = loader('../graphql/create-text-mutation.graphql');

function TextFormMutation(props){
    let {title, content, pay, source_language, target_language, difficulty, handleSubmit } = props

    let source_language_id = parseInt(source_language.id, 10)
    let target_language_id = parseInt(target_language.id, 10)
    let difficulty_id = parseInt(difficulty.id, 10)
    let mutation = CREATE_TEXT_MUTATION
    let variables =  { title, content, pay, source_language_id, target_language_id, difficulty_id }

    return (
        <Mutation
            mutation={mutation}
            variables={variables}
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

export default TextFormMutation