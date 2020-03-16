import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Event from './screens/Event';
import About from './screens/About';
import Sermon from './screens/Sermon';
import Home from './screens/Home';






class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/event" component={Event} />
                        <Route path="/about" component={About} />
                        <Route path="/sermon" component={Sermon} />
                        <Route path="/" component={Home} />
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;