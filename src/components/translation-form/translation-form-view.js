import React from "react"
import { Header, Form, TextArea, Divider, Segment, Grid } from "semantic-ui-react";
import TranslationMutation from "./translation-mutation";

function TranslationFormView(props){
    let { text, translation_id, title, content, text_id, status, handleChange, handleSubmit } = props
    return (
        <Segment raised>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <Header>{text.title}</Header>
                    <p>{text.content}</p>
                </Grid.Column>
                <Grid.Column>
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
                            style={{minHeight: 500}}
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
                </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    )
}

export default TranslationFormView