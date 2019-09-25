import React from "react"
import { Segment, Header, Button, Icon } from "semantic-ui-react";

function HomeView(props){
    return (
        <Segment raised>
            <Header>Welcome to glot!</Header>
            <p>glot is a place to translate for fun and profit, connecting translators with those who need translations.</p>
            <p><strong>Please login or create an account to access the full site.</strong></p>
            <p>For a demonstration, please use the following credentials:</p>
            <ul>
                <li>User: demo</li>
                <li>Pass: 123</li>
            </ul>
            <p>This site was developed by <a href="https://github.com/m4thayus">@m4thayus</a>, a full stack web developer. To view his blog follow the link below:</p>
            <Button
                as="a"
                href="https://conceptualsoup.blog"
            >
                <Icon name="arrow left"/>
                Back to Conceptual Soup
            </Button>
            {/* <p>glot is still undergoing development so stay tuned.</p> */}

        </Segment>
    )
}

export default HomeView