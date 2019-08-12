import React from "react"
import { Item, Segment } from 'semantic-ui-react'

function TranslationsView(props){
    let { translation } = props

    return (
        <Segment>
            <Item>
                <Item.Content>
                   <Item.Header>{translation.title}</Item.Header>
                   <Item.Meta>{translation.status}</Item.Meta>
                   <Item.Description>{translation.content}</Item.Description>
                </Item.Content>
            </Item>
        </Segment>    
    )
}

export default TranslationsView