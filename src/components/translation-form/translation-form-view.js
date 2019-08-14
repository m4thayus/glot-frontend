import React from "react"
import { Form } from "semantic-ui-react";
import TranslationMutation from "./translation-mutation";

function TranslationFormView(props){
    let { title, content, text_id, handleChange, handleSubmit } = props
    return (
        <Form>


            <TranslationMutation 
                title={title}
                content={content}
                text_id={text_id}
                handleSubmit={handleSubmit}
            />
        </Form> 
    )
}

export default TranslationFormView