import React from "react"
import { Form, TextArea, Divider } from "semantic-ui-react";
import TranslationMutation from "./translation-mutation";

function TranslationFormView(props){
    let { translation_id, title, content, text_id, status, handleChange, handleSubmit } = props
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
                translation_id={translation_id}
                title={title}
                content={content}
                text_id={text_id}
                status={status}
                handleSubmit={handleSubmit}
            />
        </Form> 
    )
}

export default TranslationFormView