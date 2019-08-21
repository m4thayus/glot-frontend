import React from "react";
import UpvoteView from "./upvote-view";

class UpvoteContainer extends React.Component {

    
    constructor(props) {
        super(props)
        if (props.translation.votes.filter(vote => vote.user.id === props.user_id).length !== 0){
            this.state = {
                hasVoted: true
            }
        } else {
            this.state = {
                hasVoted: false 
            }
        }
    }

    handleSubmit = data => {
        this.setState({
            hasVoted: !this.state.hasVoted 
        })
    }

    render() {
        return (
            <UpvoteView 
                translation={this.props.translation}
                hasVoted={this.state.hasVoted}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default UpvoteContainer