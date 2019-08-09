import React from "react"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TextsContainer from "./texts-container";

const TEXTS_QUERY = gql`
    {
        texts {
            id
            title 
            content
        }
  }
`

function TextsQuery(props){
    return (
        <Query query={TEXTS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>{console.log(error)}</div>
            return <TextsContainer texts={data.texts}/>
        }}
    </Query> 
    )
}

export default TextsQuery