import React from 'react';
// import logo from '../assets/images/logo.svg';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Segment, Divider } from 'semantic-ui-react';
import NavBar from '../nav-bar'
import Home from '../home'
import Texts from '../texts'
import Translations from '../translations'

function App() {
    return (
        <React.Fragment>
            <Router>
                <Segment>
                    <NavBar />
                    <Divider horizontal />
                    <Route exact path="/" component={Home} />
                    <Route path="/texts" component={Texts} />
                    <Route path="/translations" component={Translations} />
                </Segment>
            </Router>
        </React.Fragment>
    );
}

export default App;