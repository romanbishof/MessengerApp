import React from 'react';

import { BroserRouter as Router, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <Route path='/' exact component={Join}></Route>
        <Route path='/chat' exact component={Chat}></Route>
    </Router>
);
