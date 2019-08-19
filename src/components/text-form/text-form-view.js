import React from "react"
import { Form, TextArea, Divider } from "semantic-ui-react";
import TextMutation from "./text-mutation";

function TextFormView(props){
    let {title, content, pay, source_language_id, target_language_id, difficulty_id, handleChange, handleSubmit } = props
    return (
        <React.Fragment>
            <Form>
                <Form.Input
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
                <Form.Input
                    placeholder='How much will you pay?'
                    name='pay'
                    type='number'
                    value={pay}
                    onChange={handleChange}
                />
                <TextArea 
                    placeholder='Enter text to translate...'
                    name='content'
                    value={content}
                    onChange={handleChange}
                    style={{minHeight: 500}}
                />
                <Divider horizontal />
                <TextMutation 
                    title={title}
                    content={content}
                    pay={pay}
                    source_language_id={source_language_id}
                    target_language_id={target_language_id}
                    difficulty_id={difficulty_id}
                    handleSubmit={handleSubmit}
                />
            </Form> 
        </React.Fragment>
    )
}

export default TextFormView