import React from 'react';
// import logo from '../assets/images/logo.svg';
import './app.css';
import { Container } from 'semantic-ui-react'
import NavBar from '../nav-bar'
import Texts from '../texts'

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Container>
                <Texts />
            </Container>
        </React.Fragment>
    );
}

export default App;