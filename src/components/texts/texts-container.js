import React from "react";
import TextsView from "./texts-view";
import { Item, Container, Pagination, Tab } from 'semantic-ui-react'

class TextsContainer extends React.Component {
    render() {
        let { texts } = this.props
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ]
        return (
            <Container>
                {/* <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} /> */}
                <Item.Group>
                    {texts.map(text => <TextsView key={text.id} text={text} />)}
                </Item.Group>
                <Pagination secondary defaultActivePage={1} disabled totalPages={5} />
            </Container>
        )
    }
}

export default TextsContainer