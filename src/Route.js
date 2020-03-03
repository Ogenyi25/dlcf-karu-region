import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";

import Event from './screens/Event';
import About from './screens/About';
import Sermon from './screens/Sermon';
import Home from './screens/Home';






class AppRouter extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route path="/event" component={Event} />
                        <Route path="/about" component={About} />
                        <Route path="/sermon" component={Sermon} />
                        <Route path="/" component={Home}  />
                    </Switch>
            </Router>
        );
    }
}

export default AppRouter;