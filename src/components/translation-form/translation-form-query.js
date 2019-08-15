import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import TranslationFormContainer from "./translation-form-container";

const TRANSLATION_QUERY = loader('../graphql/translation-query.graphql');

function TranslationFormQuery(props){
    const text_id = parseInt(props.match.params.id, 10)

    const loader = (
        <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
        </Dimmer>
    )

    return (
        <Query query={TRANSLATION_QUERY} variables={{ text_id }}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                let translation = data.translations ? data.translations[0] : null 
                return <TranslationFormContainer translation={translation} text_id={text_id} />
            }}
        </Query> 
    )
}

export default TranslationFormQuery