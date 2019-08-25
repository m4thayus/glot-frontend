import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import TextsContainer from "./texts-container";

const TEXTS_QUERY = loader('../graphql/queries/user-languages-texts-query.graphql');

function TextsQuery(props){
    const loader = (
        <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
        </Dimmer>
    )

    return (
        <Query query={TEXTS_QUERY} fetchPolicy={'cache-and-network'}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                return <TextsContainer languages={data.me.languages}/>
            }}
        </Query> 
    )
}

export default TextsQuery