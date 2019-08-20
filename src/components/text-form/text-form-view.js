import React from "react"
import { Form, TextArea, Divider, Segment, Label} from "semantic-ui-react";
import TextMutation from "./text-mutation";

function TextFormView(props){
    let {languages, title, content, pay, source_language, target_language, difficulty, handleChange, handleIntChange, handleLangChange, handleDiffChange, handleSubmit } = props

    let languageOptions = languages.map(language => {
        let id = language.id
        let text = language.name
        return {key: id, text: text, value: language.name}
    })

    let difficultyOptions = [{}]
    if (source_language) {
        difficultyOptions = source_language.difficulties.map(difficulty => {
            let id = difficulty.id 
            let text = difficulty.description
            return {key: id, text: text, value: difficulty.description}
        })
    }

    return (
        <Segment raised>
            <Form>
                <Form.Input
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
                <Form.Group widths='equal'>
                    <Form.Dropdown
                        name='source_language'
                        placeholder='Choose source language...'
                        text={source_language.name}
                        options={languageOptions}
                        search
                        selection
                        onChange={handleLangChange}
                    />
                    <Form.Dropdown
                        name='target_language'
                        placeholder='Choose target language...'
                        text={target_language.name}
                        options={languageOptions}
                        search
                        selection
                        onChange={handleLangChange}
                    />
                </Form.Group>
                {
                    source_language 
                    ? 
                    <Form.Dropdown 
                        name='difficulty'
                        placeholder='Choose a difficulty...'
                        text={difficulty.description}
                        options={difficultyOptions}
                        search
                        selection
                        onChange={handleDiffChange}
                    />
                    :
                    null
                }
                <Form.Input 
                    labelPosition='right'
                    placeholder='100'
                    value={pay}
                    onChange={handleIntChange}
                    name='pay'
                    type='number'
                >
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                </Form.Input>
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
                    source_language={source_language}
                    target_language={target_language}
                    difficulty={difficulty}
                    handleSubmit={handleSubmit}
                />
            </Form> 
        </Segment>
    )
}

export default TextFormView