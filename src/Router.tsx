import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppSelector from "./AppSelector";
import AppEditor from "./AppEditor";


export default function RouterApp () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/huSelector">
            <HuSelectorPage />
          </Route>
          <Route path="/huEditor">
            <HuEditorPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function HuSelectorPage() {
  return <AppSelector></AppSelector>;
}

function HuEditorPage() {
  return <AppEditor></AppEditor>;
}
