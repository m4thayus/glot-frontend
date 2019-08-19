import React from "react"
import { Form, TextArea, Divider, Segment, Label } from "semantic-ui-react";
import TextMutation from "./text-mutation";

function TextFormView(props){
    let {languages, title, content, pay, source_language, target_language, difficulty, handleChange, handleIntChange, handleLangChange, handleDiffChange, handleSubmit } = props
    return (
        <Segment>
            <Form>
                <Form.Input
                    placeholder='Title'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />
                <Form.Input 
                    list='source_languages'
                    name='source_language'
                    placeholder='Choose source language...'
                    onChange={handleLangChange}
                />
                    <datalist id='source_languages'>
                        {languages.map(language => <option key={language.id} value={language.name} />)}
                    </datalist>
                <Form.Input 
                    list='target_languages'
                    name='target_language'
                    placeholder='Choose target language...'
                    onChange={handleLangChange}
                />
                    <datalist id='target_languages'>
                        {languages.map(language => <option key={language.id} value={language.name} />)}
                    </datalist>
                {
                    source_language 
                    ? 
                    <React.Fragment>
                    <Form.Input 
                        list='difficulties'
                        name='difficulty'
                        placeholder='Choose a difficulty...'
                        onChange={handleDiffChange}
                    />
                        <datalist id='difficulties'>
                            {source_language.difficulties.map(difficulty => <option key={difficulty.id} value={difficulty.level} />)}
                        </datalist>
                    </React.Fragment>
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