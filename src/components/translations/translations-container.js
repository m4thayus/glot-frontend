import React from "react";
import TranslationsView from "./translations-view";
import { Item, Container, Pagination, Segment, Header, Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";

class TranslationsContainer extends React.Component {
    render() {
        let { translations } = this.props

        return (
            <Container>
                <Segment raised>
                    { translations.length === 0 
                        ?
                            <React.Fragment>
                                <Header>That's unfortunate...</Header>
                                <Segment textAlign="center" basic>
                                    <Button
                                        primary
                                        animated="fade"
                                        as={Link}
                                        to='/texts'>
                                        <Button.Content visible>You Haven't Written Any Yet!</Button.Content>
                                        <Button.Content hidden>Find A Text To Translate</Button.Content>
                                    </Button>
                                </Segment>
                            </React.Fragment>
                        :
                            <React.Fragment>
                                <Item.Group divided>
                                    {translations.map(translation => <TranslationsView key={translation.id} translation={translation} />)}
                                </Item.Group>
                                <Pagination fluid widths='9' secondary defaultActivePage={1} disabled totalPages={5} />
                            </React.Fragment>
                    }
                </Segment>
            </Container>
        )
    }
}

export default TranslationsContainer