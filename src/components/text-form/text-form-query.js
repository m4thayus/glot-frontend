import React from "react"
import { Query } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Dimmer, Loader } from "semantic-ui-react";
import TextFormContainer from "./text-form-container";

const LANGUAGES_QUERY =  loader('../graphql/languages-query.graphql');


function TextFormQuery(props){
    const loader = (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
    )

    return (
        <Query query={LANGUAGES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return loader
                if (error) return (
                    <React.Fragment>
                        {console.log(error)}
                        {loader}
                    </React.Fragment>
                )
                return <TextFormContainer languages={data.languages} />
            }}
        </Query> 
    )
}

export default TextFormQuery