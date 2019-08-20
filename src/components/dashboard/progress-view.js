import React from "react"
import { Header, Progress, Segment } from "semantic-ui-react";

const statusToNum = string => {
    switch (string) {
        case 'complete':
            return 4       
        case 'under-review':
            return 3        
        case 'pending':
            return 2            
        default:
            return 1
    }
}

function ProgressView(props){
    let { item } = props
    return (
        <Segment>
            <Header>{item.title}</Header>
            <Progress value={statusToNum(item.status)} total={4} progress='ratio' size="medium" />
        </Segment>
    )
}

export default ProgressView