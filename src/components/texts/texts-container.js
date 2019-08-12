import React from "react";
import TextsView from "./texts-view";
import { Item, Container, Pagination } from 'semantic-ui-react'

class TextsContainer extends React.Component {
    render() {
        let { texts } = this.props

        return (
            <Container>
                <Item.Group>
                    {texts.map(text => <TextsView key={text.id} text={text} />)}
                </Item.Group>
                <Pagination secondary defaultActivePage={1} disabled totalPages={5} />
            </Container>
        )
    }
}

export default TextsContainer