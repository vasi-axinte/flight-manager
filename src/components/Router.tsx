import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Login from "./Login";

class Router extends React.Component{
    
    public render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/manage-flights" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Router;