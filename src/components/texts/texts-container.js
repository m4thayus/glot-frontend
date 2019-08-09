import React from "react";
import TextsView from "./texts-view";

class TextsContainer extends React.Component {
    render() {
        let { texts } = this.props

        return (
            texts.map(text => <TextsView key={text.id} text={text} />) 
        )
    }
}

export default TextsContainer