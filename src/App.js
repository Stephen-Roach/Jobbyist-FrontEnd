import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
