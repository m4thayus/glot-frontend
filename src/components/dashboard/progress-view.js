import React from "react"
import { Header, Progress, Segment } from "semantic-ui-react";


function ProgressView(props){
    let { item, statusToNum } = props
    return (
        <Segment>
            <Header>{item.title}</Header>
            <Progress value={statusToNum(item.status)} total={3} progress='ratio' size="medium" />
        </Segment>
    )
}

export default ProgressView