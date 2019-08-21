import React from "react"
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro';
import { Button } from "semantic-ui-react";

const CREATE_KNOWN_LANGUAGE_MUTATION = loader('../graphql/create-known-language-mutation.graphql');

function KnownLanguageMutation(props){
    return (
        <div>mutation</div>
    )
}

export default KnownLanguageMutation