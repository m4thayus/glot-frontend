import React from "react";
import KnownLanguageFormView from "./known-language-form-view";

class KnownLanguageFormContainer extends React.Component {

    state = {
        selectedLanguage: "",
        selectedDifficulty: ""
    }

    handleLangChange = (event, data) => {
        let langObj = this.props.languages.find(language => language.name === data.value)
        this.setState({
            [data.name]: langObj
        })
    }

    handleDiffChange = (event, data) => {
        let diffObj = this.state.selectedLanguage.difficulties.find(difficulty => difficulty.description === data.value)
        this.setState({
            [data.name]: diffObj
        })
    }

    render() {
        let { selectedLanguage, selectedDifficulty } = this.state
        let { languages } = this.props

        return (
            <KnownLanguageFormView 
                languages={languages}
                selectedLanguage={selectedLanguage}
                selectedDifficulty={selectedDifficulty}
                handleLangChange={this.handleLangChange}
                handleDiffChange={this.handleDiffChange}
            />
        )
    }
}

export default KnownLanguageFormContainer