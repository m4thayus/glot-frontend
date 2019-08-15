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
        let translation_id = this.props.translation ? this.props.translation.id : null
        let status = this.props.translation ? this.props.translation.status : null
        return (
            <Container>
                <TranslationFormView
                    translation_id={translation_id}
                    title={title}
                    content={content}
                    text_id={this.props.text_id}
                    status={status}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </Container>
        )
    }
}

export default withRouter(TranslationFormContainer)