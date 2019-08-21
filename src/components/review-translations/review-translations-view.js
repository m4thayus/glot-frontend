import React from "react"
import { Item } from 'semantic-ui-react'
import Upvote from '../upvote'

function ReviewTranslationsView(props){
    let { translation } = props

    return (
        <Item>
            <Item.Content>
                <Item.Header>{translation.title}</Item.Header>
                <Item.Meta>{translation.status}</Item.Meta>
                <Item.Description>{translation.content}</Item.Description>
                <Item.Extra>
                    <Upvote  translation={translation}/>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ReviewTranslationsView