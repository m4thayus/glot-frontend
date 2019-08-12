import React from "react";
import TranslationsView from "./translations-view";
import { Item, Container, Pagination } from 'semantic-ui-react'

class TranslationsContainer extends React.Component {
    render() {
        let { translations } = this.props

        return (
            <Container>
                <Item.Group>
                    {translations.map(translation => <TranslationsView key={translation.id} translation={translation} />)}
                </Item.Group>
                <Pagination secondary defaultActivePage={1} disabled totalPages={5} />
            </Container>
        )
    }
}

export default TranslationsContainer