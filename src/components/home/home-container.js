import React from "react";
import HomeView from "./home-view";
import { Container } from "semantic-ui-react";

class HomeContainer extends React.Component {
    render() {
        return (
            <Container>
                <HomeView />
            </Container>
        )
    }
}

export default HomeContainer