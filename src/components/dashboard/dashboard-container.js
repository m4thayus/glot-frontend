import React from "react";
import { Container } from "semantic-ui-react";
import DashboardView from "./dashboard-view";

class DashboardContainer extends React.Component {
    render() {
        return (
            <Container>
                <DashboardView /> 
            </Container>
        )
    }
}

export default DashboardContainer