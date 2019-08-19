import React from "react";
import TextsView from "./texts-view";
import { Item, Container, Pagination, Tab, Segment, Menu } from 'semantic-ui-react'

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
        // const panes = languages.map(lang => {
        //     let menuText = lang.name
        //     return {menuItem: menuText, render: () => {
        //         return (
        //             <Tab.Pane>
        //                 <Item.Group>
        //                     {lang.sourceTexts.map(text => <TextsView key={text.id} text={text} />)}
        //                 </Item.Group>
        //                 <Pagination secondary defaultActivePage={1} disabled totalPages={5} />
        //             </Tab.Pane>
        //         )}
        //     }
        // })
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
                {/* <Tab menu={{ fluid: true, vertical: true }} menuPosition='left' panes={panes} /> */}
                <Menu vertical>
                    <Menu.Item header>Source Language</Menu.Item>
                    {menuItems}
                </Menu>
                <Item.Group>
                    {activeItem.sourceTexts.map(text => <TextsView key={text.id} text={text} />)}
                </Item.Group>
                <Pagination secondary defaultActivePage={1} disabled totalPages={5} />
            </Container>
        )
    }
}

export default TextsContainer