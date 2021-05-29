import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePost from "./components/CreatePost/CreatePost";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/createPost">
            <CreatePost/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/postLists">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
