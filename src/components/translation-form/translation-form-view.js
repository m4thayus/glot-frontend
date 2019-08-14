import React from "react"
import { Form } from "semantic-ui-react";
import TranslationMutation from "./translation-mutation";

function TranslationFormView(props){
    let { title, content, handleChange, handleSubmit } = props
    return (
        <Form>


            <TranslationMutation 
                title={title}
                content={content}
            />
        </Form> 
    )
}

export default TranslationFormView