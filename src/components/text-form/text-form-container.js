import React from "react";
import TextFormView from "./text-form-view";
import { Container } from "semantic-ui-react";

class TextFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: "",
            pay: "",
            source_language_id: "",
            target_language_id: "",
            difficulty_id: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.history.push('/texts')
    }

    render() {
        let { title, content, pay, source_language_id, target_language_id, difficulty_id } = this.state
        return (
            <Container>
                <TextFormView 
                    title={title}
                    content={content}
                    pay={pay}
                    source_language_id={source_language_id}
                    target_language_id={target_language_id}
                    difficulty_id={difficulty_id}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />            
            </Container>
        )
    }
}

export default TextFormContainer