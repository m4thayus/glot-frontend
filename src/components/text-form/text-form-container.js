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
        console.log(lang)
        if (lang !== "") {
            this.setState({
                difficulty: lang.difficulties.find(diff => diff.level === event.target.value)
            })
        }
        console.log(this.state.difficulty)
    }

    handleIntChange = event => {
        let val = event.target.value
        val = +val
        console.log(+val)
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
        console.log(this.props.languages)
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

export default TextFormContainer