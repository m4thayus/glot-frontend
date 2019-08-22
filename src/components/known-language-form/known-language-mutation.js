import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_KNOWN_LANGUAGE_MUTATION = loader('../graphql/create-known-language-mutation.graphql');

function KnownLanguageMutation(props){
    let { selectedLanguage, selectedDifficulty, handleSubmit } = props
    let language_id = ''
    let difficulty_id = ''
    if (selectedLanguage.id !== undefined && selectedDifficulty.id !== undefined) {
        language_id = parseInt(selectedLanguage.id, 10)
        difficulty_id = parseInt(selectedDifficulty.id, 10)
    }

    return (
        <Mutation
            mutation={CREATE_KNOWN_LANGUAGE_MUTATION}
            variables={{ language_id, difficulty_id }}
            onCompleted={data => handleSubmit(data)}
            onError={error => console.log(error)}
        >
            {mutation => (
                selectedLanguage !== '' && selectedDifficulty !== ''
                ?
                <Button 
                    type='submit'
                    onClick={mutation}
                    color='green'
                >
                    Submit
                </Button>
                :
                <Button 
                    disabled
                    type='submit'
                >
                    Submit
                </Button>

            )}
        </Mutation>
    )
}

export default KnownLanguageMutation