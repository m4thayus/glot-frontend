import React from "react"
import { Form, Modal, Segment} from "semantic-ui-react";

function LanguageFormView(props){

    let languages = props.known.map(known => (
        {
            key: known.language.shortName,
            text: known.language.name,
            value: known.language.name
        }
    ))

    return (
        <React.Fragment>
            <Modal.Header>Add A Language</Modal.Header>
            <Modal.Description>
                <Segment padded='very' basic>
                    <Form>
                        <Form.Dropdown placeholder='Languages' fluid multiple selection options={languages} />
                    </Form>
                </Segment>
            </Modal.Description>
        </React.Fragment>
    )
}

export default LanguageFormView