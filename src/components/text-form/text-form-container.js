import React from "react";
import TextFormView from "./text-form-view";
import { Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom"

class TextFormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: "",
            pay: "",
            source_language: "",
            target_language: "",
            difficulty: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLangChange = event => {
        this.setState({
            [event.target.name]: this.props.languages.find(language => language.name === event.target.value)
        })
    }

    handleDiffChange = event => {
        let lang = this.state.source_language
        this.setState({
            difficulty: lang.difficulties.find(diff => diff.description === event.target.value)
        })
    }

    handleIntChange = event => {
        let val = event.target.value
        val = +val
        if (isNaN(val) || val <= 0){
            this.setState({
                [event.target.name]: ""
            })
        } else {
            this.setState({
                [event.target.name]: val
            })
        }
    }

    handleSubmit = () => {
        this.props.history.push('/texts')
    }

    render() {
        let { title, content, pay, source_language, target_language, difficulty } = this.state
        return (
            <Container>
                <TextFormView 
                    languages={this.props.languages}
                    title={title}
                    content={content}
                    pay={pay}
                    source_language={source_language}
                    target_language={target_language}
                    difficulty={difficulty}
                    handleChange={this.handleChange}
                    handleIntChange={this.handleIntChange}
                    handleLangChange={this.handleLangChange}
                    handleDiffChange={this.handleDiffChange}
                    handleSubmit={this.handleSubmit}
                />            
            </Container>
        )
    }
}

export default withRouter(TextFormContainer)