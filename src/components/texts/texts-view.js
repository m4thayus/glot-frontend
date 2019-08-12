import React from "react"
import { Item, Segment } from 'semantic-ui-react'

function TextsView(props){
    let { text } = props

    return (
        <Segment>
            <Item>
                <Item.Content>
                   <Item.Header>{text.title}</Item.Header>
                   <Item.Meta>{text.targetLanguage.name}</Item.Meta>
                   <Item.Description>{text.content}</Item.Description>
                </Item.Content>
            </Item>
        </Segment>    
    )
}

export default TextsView