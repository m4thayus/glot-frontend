import React from "react"
import { Item, Segment, Grid, Container } from 'semantic-ui-react'
import Upvote from '../upvote'

function ReviewTranslationsView(props){
    let { translation, user_id } = props

    return (
        <Segment raised>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Item>
                            <Item.Content>
                                <Item.Header>{translation.text.title}</Item.Header>
                                {/* <Item.Meta>{translation.text.status}</Item.Meta> */}
                                <Item.Description>{translation.text.content}</Item.Description>
                                <Item.Extra>
                                </Item.Extra>
                                </Item.Content>
                        </Item>
                    </Grid.Column>
                    <Grid.Column>
                        <Item>
                            <Item.Content>
                                <Item.Header>{translation.title}</Item.Header>
                                {/* <Item.Meta>{translation.status}</Item.Meta> */}
                                <Item.Description>{translation.content}</Item.Description>
                                <Item.Extra>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>

                    </Grid.Column>
                    <Grid.Column>
                    <Container textAlign='center'>
                        <Upvote  translation={translation} user_id={user_id} />
                    </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ReviewTranslationsView