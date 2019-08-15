import React from "react"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Dimmer, Loader } from "semantic-ui-react";
import TranslationsContainer from "./translations-container";

const TRANSLATIONS_QUERY = gql`
    {
        translations {
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

function TranslationsQuery(props){
    const loader = (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
    )

    return (
        <Query query={TRANSLATIONS_QUERY} fetchPolicy={'cache-and-network'}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                return <TranslationsContainer translations={data.translations}/>
            }}
        </Query> 
    )
}

export default TranslationsQuery