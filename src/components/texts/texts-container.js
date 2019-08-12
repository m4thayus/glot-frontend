import React from "react";
import TextsView from "./texts-view";
import { Item } from 'semantic-ui-react'

class TextsContainer extends React.Component {
    render() {
        let { texts } = this.props

        return (
            <Item.Group>
                {texts.map(text => <TextsView key={text.id} text={text} />)}
            </Item.Group>
        )
    }
}

export default TextsContainer