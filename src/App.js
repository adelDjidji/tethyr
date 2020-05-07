import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "./Styles/App.min.css";
import "./Styles/respo.min.css";

import Home from "./Containers/Home";
import GroupsManager from "./Containers/GroupsManager";

import Navbar from "./Components/Navbar/index";

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manager/:id" component={GroupsManager} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
