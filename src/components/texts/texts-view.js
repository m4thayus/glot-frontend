import React from "react"
import { Item, Segment, Button, Label, Divider, Header } from 'semantic-ui-react'

function TextsView(props){
    let { text } = props
    let word_count = text.content.split(' ').length
    let pay_per_word = (text.pay / word_count).toFixed(2)

    return (
        <Segment raised>
            <Label ribbon='left' color='blue'>
                {word_count} Words
            </Label>
            <Header>{text.title}</Header>
            <Label attached='top right'>
                ${pay_per_word} per Word | ${text.pay}
            </Label>
            <Item>
                <Item.Content vertical-align='middle'>
                    <Item.Meta>{text.difficulty.description} {text.targetLanguage.name}</Item.Meta>
                    <Item.Description>{text.content}</Item.Description>
                    <Divider horizontal></Divider>
                    <Item.Extra>
                    </Item.Extra>
                </Item.Content>
            </Item>
                        <Button  fluid>
                            {text.status}
                        </Button>
        </Segment>    
    )
}

export default TextsView