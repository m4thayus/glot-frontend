import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_TRANSLATION_MUTATION = loader('../graphql/mutations/create-translation-mutation.graphql');
const UPDATE_TRANSLATION_MUTATION = loader('../graphql/mutations/update-translation-mutation.graphql');
const TRANSLATIONS_QUERY = loader('../graphql/queries/translations-query.graphql');

function TranslationMutation(props){
    let { translation_id, title, content, text_id, handleSubmit } = props

    let mutation = CREATE_TRANSLATION_MUTATION
    let variables =  { title, content, text_id, status: 'pending' }

    if (translation_id) {
        let id = parseInt(translation_id, 10)
        mutation = UPDATE_TRANSLATION_MUTATION
        variables = { id, title, content, text_id, status: 'pending' }
    }

    let save_variables = { ...variables }
    save_variables.status = 'draft'

    return (
        <React.Fragment>
            <Mutation
                mutation={mutation}
                refetchQueries={() => [{query: TRANSLATIONS_QUERY}]}
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
            <Mutation
                mutation={mutation}
                refetchQueries={() => [{query: TRANSLATIONS_QUERY}]}
                variables={save_variables}
                onCompleted={data => handleSubmit(data)}
                onError={error => console.log(error)}
            >
                {mutation => (
                    <Button 
                        type='submit'
                        onClick={mutation}
                        color='blue'
                    >
                        Save
                    </Button>

                )}
            </Mutation>
        </React.Fragment>
    )
}

export default TranslationMutation