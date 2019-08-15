import React from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from "semantic-ui-react";
import {TRANSLATIONS_QUERY} from "../translations/translations-query";

const TRANSLATION_MUTATION = gql`
    mutation TranslationMutation($title: String!, $content: String!, $text_id: Int!) {
        createTranslation(
            title: $title
            content: $content
            textId: $text_id
        ) {
            id
            title 
            content
            status
            votes {
                up
            }
        }

    }
`

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