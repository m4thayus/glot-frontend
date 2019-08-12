import React from "react"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Dimmer, Loader } from "semantic-ui-react";
import TextsContainer from "./texts-container";

const TEXTS_QUERY = gql`
    {
        texts {
            id
            title 
            content
            pay
            status
            difficulty {
                description
            }
            sourceLanguage {
                name
            }
            targetLanguage {
                name
            }
        }
  }
`

function TextsQuery(props){
    const loader = (
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        )

    return (
        <Query query={TEXTS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return loader
            if (error) return (
                <React.Fragment>
                    {console.log(error)}
                    {loader}
                </React.Fragment>
            )
            return <TextsContainer texts={data.texts}/>
        }}
    </Query> 
    )
}

export default TextsQuery