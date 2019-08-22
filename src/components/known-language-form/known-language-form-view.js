import React from "react"
import { Form, Modal, Segment} from "semantic-ui-react";
import KnownLanguageMutation from "./known-language-mutation";

function LanguageFormView(props){
    let { languages, knownLanguages, selectedLanguage, selectedDifficulty, handleLangChange, handleDiffChange, handleSubmit } = props

    let languageOptions = languages.map(language => (
        {
            key: language.shortName,
            text: language.name,
            value: language.name
        }
    ))

    let difficulties = []
    if (selectedLanguage !== '') {
        let selectedKnownLanguages = knownLanguages.filter(known => known.language.id === selectedLanguage.id)
        let selectedKnownDifficultiesIds = selectedKnownLanguages.map(known => known.difficulty.id)
        let newDifficulties = selectedLanguage.difficulties.filter(difficulty => !selectedKnownDifficultiesIds.includes(difficulty.id))
        difficulties = newDifficulties.map(difficulty => (
            {
                key: difficulty.value,
                text: difficulty.description,
                value: difficulty.description
            }
        ))
    }

    let noDifficulties = [
        {
            key: 'allKnown',
            text: 'You already know this language...',
            value: ''
        }
    ]

    return (
        <React.Fragment>
            <Modal.Header>Add A Language</Modal.Header>
            <Modal.Description>
                <Segment padded='very' basic>
                    <Form>
                        <Form.Dropdown
                            name='selectedLanguage'
                            fluid selection 
                            placeholder='Language'
                            value={selectedLanguage.name}
                            options={languageOptions}
                            onChange={handleLangChange} />
                        { selectedLanguage !== '' 
                            ?
                            <Form.Dropdown
                                name='selectedDifficulty'
                                fluid selection 
                                placeholder='Difficulty'
                                value={selectedDifficulty !== undefined ? selectedDifficulty.description : ''}
                                options={difficulties.length === 0 ? noDifficulties : difficulties} 
                                onChange={handleDiffChange} />
                            :
                            null
                        }
                    </Form>
                </Segment>
            </Modal.Description>
            <Modal.Actions>
                <KnownLanguageMutation
                    selectedLanguage={selectedLanguage}
                    selectedDifficulty={selectedDifficulty}
                    handleSubmit={handleSubmit}
                />
            </Modal.Actions>
        </React.Fragment>
    )
}

export default LanguageFormView