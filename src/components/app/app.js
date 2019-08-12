import React from 'react';
// import logo from '../assets/images/logo.svg';
import './app.css';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from '../nav-bar'

function App() {
    return (
        <React.Fragment>
            <Router>
                <NavBar />
            </Router>
        </React.Fragment>
    );
}

export default App;