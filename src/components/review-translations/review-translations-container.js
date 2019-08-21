import React from "react";
import { withRouter } from 'react-router-dom'
import { Item, Container, Pagination, Segment} from 'semantic-ui-react'
import ReviewTranslationsView from "./review-translations-view";

class ReviewTranslationsContainer extends React.Component {
    render() {
        let { translations } = this.props
        let user_id = this.props.location.state.user_id

        return (
            <Container>
                    <Item.Group>
                        {translations.map(translation => (
                            <ReviewTranslationsView
                                key={translation.id}
                                translation={translation}
                                user_id={user_id}
                            />)
                        )}
                    </Item.Group>
                <Segment raised>
                    <Pagination fluid widths='9' secondary defaultActivePage={1} disabled totalPages={5} />
                </Segment>
            </Container>
        )
    }
}

export default withRouter(ReviewTranslationsContainer)