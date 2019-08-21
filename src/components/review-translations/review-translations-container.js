import React from "react";
import { withRouter } from 'react-router-dom'
import { Item, Container, Pagination, Segment, Menu} from 'semantic-ui-react'
import ReviewTranslationsView from "./review-translations-view";

class ReviewTranslationsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: props.languages[0]
        }
    }

    handleItemClick = (event, { name }) => {
        let { languages } = this.props
        this.setState({
            activeItem: languages.find(language => language.name === name)
        })
    }

    render() {
        let { translations, languages } = this.props
        let user_id = this.props.location.state.user_id

        let { activeItem } = this.state
        const menuItems = languages.map(lang => {
            return (
                <Menu.Item
                    key={lang.id}
                    name={lang.name}
                    active={activeItem === lang}
                    onClick={this.handleItemClick}
                />
            )

        })

        return (
            <Container>
                <Menu text>
                    <Menu.Item header>Target Language</Menu.Item>
                    {menuItems}
                </Menu>
                <Item.Group>
                    {translations.filter(translation => translation.text.targetLanguage.id === activeItem.id ).map(translation => (
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