import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Search from "./Components/Search";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
