import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "./Styles/respo.min.css";

import Landing from "./Containers/Landing";
import Home from "./Containers/Home";
import GroupsManager from "./Containers/GroupsManager";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/manager/:id" component={GroupsManager} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
