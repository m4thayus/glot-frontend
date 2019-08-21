import React from "react"
import { Label } from "semantic-ui-react";

function KnownLanguageLabel(props){
    return (
        <Label>
            {props.known.difficulty.description} {props.known.language.name}
        </Label>
    )
}

export default KnownLanguageLabel