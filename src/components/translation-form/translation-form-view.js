import React from "react"
import { Form, TextArea, Divider } from "semantic-ui-react";
import TranslationMutation from "./translation-mutation";

function TranslationFormView(props){
    let { title, content, text_id, handleChange, handleSubmit } = props
    return (
        <Form>
            <Form.Input
                placeholder='Title'
                name='title'
                value={title}
                onChange={handleChange}
            />
            <TextArea 
                placeholder='Enter your translation...'
                name='content'
                value={content}
                onChange={handleChange}
            />
            <Divider horizontal />
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