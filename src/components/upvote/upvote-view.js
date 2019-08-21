import React from "react"
import UpvoteMutation from "./upvote-mutation";
import { Button } from "semantic-ui-react";

function UpvoteView(props){
    let { translation, hasVoted, handleSubmit } = props
    return (
        <Button.Group fluid>
            <UpvoteMutation translation={translation} hasVoted={hasVoted} handleSubmit={handleSubmit} />
        </Button.Group>
    )
}

export default UpvoteView