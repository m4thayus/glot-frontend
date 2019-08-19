import React from 'react';
// import logo from '../assets/images/logo.svg';
import './app.css';
import { withRouter, Route } from "react-router-dom"
import { Segment, Divider } from 'semantic-ui-react';
import NavBar from '../nav-bar'
import Home from '../home'
import Texts from '../texts'
import TextForm from '../text-form'
import Translations from '../translations'
import TranslationForm from '../translation-form'
import Dashboard from '../dashboard'
import { AUTH_TOKEN } from '../../constants';

function App(props) {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
        <Segment>
            <NavBar history={props.history} />
            <Divider horizontal />
            <Route exact path="/" component={authToken ? Dashboard : Home} />
            <Route exact path="/texts" component={authToken ? Texts : Home} />
            <Route exact path="/texts/new" component={authToken ? TextForm : Home} />
            <Route exact path="/translations" component={authToken ? Translations : Home} />
            <Route path="/texts/:id/translate" component={authToken ? TranslationForm : Home} />
        </Segment>
    );
}

export default withRouter(App);