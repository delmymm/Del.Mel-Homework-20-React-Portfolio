import React from 'react';
import HomePage from './homepage';
import AboutMe from './aboutme';
import Portfolio from './portfolio';
import Resume from './resume';

import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;