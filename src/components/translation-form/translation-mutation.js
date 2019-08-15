import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const TRANSLATION_MUTATION = loader('../graphql/create-translation-mutation.graphql');
const TRANSLATIONS_QUERY = loader('../graphql/translations-query.graphql');

function TranslationMutation(props){
    let { title, content, text_id, handleSubmit } = props

    return (
        <Mutation
            mutation={TRANSLATION_MUTATION}
            refetchQueries={() => [{query: TRANSLATIONS_QUERY}]}
            variables={{ title, content, text_id }}
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

export default TranslationMutation