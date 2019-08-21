import React from "react"
import { Label } from "semantic-ui-react";

function LanguageLabels(props){
    return (
        <Label>
            {props.known.language.name}
        </Label>
    )
}

export default LanguageLabels