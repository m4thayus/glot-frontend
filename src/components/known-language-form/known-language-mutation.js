import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_KNOWN_LANGUAGE_MUTATION = loader('../graphql/create-known-language-mutation.graphql');

function KnownLanguageMutation(props){
    let { selectedLanguage, selectedDifficulty } = props
    let language_id = parseInt(selectedLanguage.id, 10)
    let difficulty_id = parseInt(selectedDifficulty.id, 10)

    return (
        <Mutation
            mutation={CREATE_KNOWN_LANGUAGE_MUTATION}
            variables={{ language_id, difficulty_id }}
            onCompleted={data => null}
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

export default KnownLanguageMutation