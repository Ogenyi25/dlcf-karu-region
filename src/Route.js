import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Event from './screens/Event';
import Sermon from './screens/Sermon';
import Home from './screens/Home';
import Sunday from './screens/Message/Sunday';


class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/event" component={Event} />
                        <Route path="/sermon" component={Sermon} />
                        <Route path="/sunday" component={Sunday} />
                        <Route path="/" component={Home} />
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;