import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import ReviewTranslationsContainer from "./review-translations-container";

const TRANSLATIONS_QUERY = loader('../graphql/translations-status-query.graphql');
const status = 'pending'

function TranslationsQuery(props){
    const loader = (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
    )

    return (
        <Query query={TRANSLATIONS_QUERY} variables={{ status }} fetchPolicy={'cache-and-network'}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                return <ReviewTranslationsContainer translations={data.translations}/>
            }}
        </Query> 
    )
}

export default TranslationsQuery