import React from "react"
import { Item, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function TranslationsView(props){
    let { translation } = props

    return (
        <Item>
            <Item.Content>
                <Item.Header>{translation.title}</Item.Header>
                <Item.Meta>{translation.status}</Item.Meta>
                <Item.Description>{translation.content}</Item.Description>
                <Item.Extra>
                    {
                        translation.status === 'approved'
                        ?
                            <Button 
                                disabled
                                floated='right'
                            >Approved</Button>
                        :
                            <Button 
                                primary
                                floated='right'
                                as={Link}
                                to={{
                                    pathname: `/texts/${translation.text.id}/translate`,
                                    state: {
                                        text: translation.text
                                    }
                                }}>
                                Edit
                            </Button>
                    }
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default TranslationsView