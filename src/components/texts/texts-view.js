import React from "react"
import { Item, Segment, Button, Label, Divider, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function TextsView(props){
    let { text } = props
    let word_count = text.content.split(' ').length
    let pay_per_word = (text.pay / word_count).toFixed(2)

    return (
        <Segment raised>
            <Label ribbon color='red'>
                {word_count} Words
            </Label>
            <Header>{text.title}</Header>
            <Label attached='top right'>
                ${pay_per_word} per Word | ${text.pay}
            </Label>
            <Item>
                <Item.Content vertical-align='middle'>
                    <Item.Meta>Target Language: {text.targetLanguage.name} | {text.difficulty.description} </Item.Meta>
                    <Item.Description>{text.content}</Item.Description>
                    <Divider horizontal></Divider>
                    <Item.Extra>
                    </Item.Extra>
                </Item.Content>
            </Item>
            {
                text.status === 'complete'
                ?
                    <Button fluid disabled>Completed</Button>
                :
                    <Button
                    fluid
                    primary
                    as={Link}
                    to={{
                        pathname: `/texts/${text.id}/translate`,
                        state: {
                            text: text
                        }
                    }}>
                    Submit A Translation
                </Button>
            }
        </Segment>    
    )
}

export default TextsView