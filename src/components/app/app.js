import React from 'react';
// import logo from '../assets/images/logo.svg';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Segment, Divider } from 'semantic-ui-react';
import NavBar from '../nav-bar'
import Home from '../home'
import Texts from '../texts'
import Translations from '../translations'
import Login from '../login'
import Dashboard from '../dashboard'
import { AUTH_TOKEN } from '../../constants';

function App() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
        <React.Fragment>
            <Router>
                <Segment>
                    <NavBar />
                    <Divider horizontal />
                    <Route exact path="/" component={authToken ? Dashboard : Home} />
                    <Route path="/texts" component={authToken ? Texts : Login} />
                    <Route path="/translations" component={authToken ? Translations : Login} />
                </Segment>
            </Router>
        </React.Fragment>
    );
}

export default App;