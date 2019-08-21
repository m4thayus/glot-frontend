import React from "react"
import UpvoteMutation from "./upvote-mutation";

function UpvoteView(props){
    return (
        <React.Fragment>
            <UpvoteMutation translation={props.translation} />
        </React.Fragment>
    )
}

export default UpvoteView