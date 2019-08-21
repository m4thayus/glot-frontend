import React from "react";
import TextsView from "./texts-view";
import { Item, Container, Pagination, Menu, Segment } from 'semantic-ui-react'

class TextsContainer extends React.Component {
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
        let { languages } = this.props
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
                    <Menu.Item header>Source Language</Menu.Item>
                    {menuItems}
                </Menu>
                <Item.Group>
                    {activeItem.sourceTexts.map(text => <TextsView key={text.id} text={text} />)}
                </Item.Group>
                <Segment raised>
                    <Pagination fluid widths='9' secondary defaultActivePage={1} disabled totalPages={5} />
                </Segment>
            </Container>
        )
    }
}

export default TextsContainer