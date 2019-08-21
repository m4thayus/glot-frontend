import React from "react"
import UpvoteMutation from "./upvote-mutation";

function UpvoteView(props){
    let { translation, hasVoted, handleSubmit } = props
    return (
        <React.Fragment>
            <UpvoteMutation translation={translation} hasVoted={hasVoted} handleSubmit={handleSubmit} />
        </React.Fragment>
    )
}

export default UpvoteView