import React from "react";
import TranslationFormView from "./translation-form-view";

class TranslationFormContainer extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         title: props.translation.title,
    //         content: props.translation.content
    //     }
    // }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let { title, content } = this.state
        return (
            <TranslationFormView
                title={title}
                content={content}
                text_id={this.props.text_id}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default TranslationFormContainer