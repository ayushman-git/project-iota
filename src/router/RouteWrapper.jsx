import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import GameScreen from "../screens/GameScreen";

function RouteWrapper({ children, ...rest }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game" exact>
          <GameScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouteWrapper;
