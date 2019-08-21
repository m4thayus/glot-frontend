import React from "react"
import { Form, Modal, Segment} from "semantic-ui-react";
import KnownLanguageMutation from "./known-language-mutation";

function LanguageFormView(props){

    let languages = props.languages.map(language => (
        {
            key: language.shortName,
            text: language.name,
            value: language.name
        }
    ))

    // let difficulties = props.selectedLanguage.difficulties.map(difficulty => (
    //     {
    //         key: difficulty.value,
    //         text: difficulty.description,
    //         value: difficulty.value
    //     }
    // ))

    return (
        <React.Fragment>
            <Modal.Header>Add A Language</Modal.Header>
            <Modal.Description>
                <Segment padded='very' basic>
                    <Form>
                        <Form.Dropdown placeholder='Language' fluid selection options={languages} />
                        {/* <Form.Dropdown placeholder='Difficulty' fluid selection options={difficulties} /> */}
                    </Form>
                </Segment>
            </Modal.Description>
            <Modal.Actions>
                <KnownLanguageMutation
                    // first_name={first_name}
                    // last_name={last_name}
                />
            </Modal.Actions>
        </React.Fragment>
    )
}

export default LanguageFormView