import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';


const App = () => {
    return (
        <Router basename = {process.env.PUBLIC_URL}>
            <Route path = {'/'} exact component = { Join } />
            <Route path = {'/chat'} exact component = { Chat } />

        </Router>
    )
}

export default App;