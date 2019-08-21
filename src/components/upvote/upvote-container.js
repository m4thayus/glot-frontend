import React from "react";
import UpvoteView from "./upvote-view";

class UpvoteContainer extends React.Component {

    handleSubmit = data => {
        console.log(data)
    }

    render() {
        return (
            <UpvoteView 
                translation={this.props.translation}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default UpvoteContainer