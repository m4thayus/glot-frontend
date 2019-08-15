import React from "react";
import { Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom"
import TranslationFormView from "./translation-form-view";

class TranslationFormContainer extends React.Component {

    constructor(props) {
        super(props)
        if (props.translation) {
            this.state = {
                title: props.translation.title,
                content: props.translation.content
            }
        } else {
            this.state = {
                title: '',
                content: ''
            }
        }
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.history.push('/translations')
    }

    render() {
        let { title, content } = this.state
        return (
            <Container>
                <TranslationFormView
                    title={title}
                    content={content}
                    text_id={this.props.text_id}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </Container>
        )
    }
}

export default withRouter(TranslationFormContainer)