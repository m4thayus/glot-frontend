import React from "react"
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from "semantic-ui-react";

const TRANSLATION_MUTATION = gql`
    mutation TranslationMutation($title: String!, $content: String!, $text_id: Int!) {
        createTranslation(
            title: $title
            content: $content
            textId: $text_id
        ) {
            title
            content
        }

    }
`

function TranslationMutation(props){
    let { title, content, text_id, handleSubmit } = props

    return (
        <Mutation
            mutation={TRANSLATION_MUTATION}
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