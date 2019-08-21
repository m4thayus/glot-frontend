import React from "react"
import { Item, Button, Grid, Segment, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function TranslationsView(props){
    let { translation } = props

    return (
        <Segment raised>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Item>
                            <Item.Content>
                                <Item.Header>{translation.text.title}</Item.Header>
                                <Item.Meta>{translation.text.status}</Item.Meta>
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
                                <Item.Meta>{translation.status}</Item.Meta>
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
                    {
                        translation.status === 'approved'
                        ?
                            <Button 
                                fluid
                                disabled
                            >Approved</Button>
                        :
                            <Button 
                                primary
                                fluid
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
                    </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default TranslationsView