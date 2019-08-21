import React from "react";
import ReviewTranslationsView from "./review-translations-view";
import { Item, Container, Pagination, Segment} from 'semantic-ui-react'

class ReviewTranslationsContainer extends React.Component {
    render() {
        let { translations } = this.props
        console.log(translations)

        return (
            <Container>
                <Segment raised>
                    <Item.Group divided>
                        {translations.map(translation => <ReviewTranslationsView key={translation.id} translation={translation} />)}
                    </Item.Group>
                    <Pagination fluid widths='9' secondary defaultActivePage={1} disabled totalPages={5} />
                </Segment>
            </Container>
        )
    }
}

export default ReviewTranslationsContainer