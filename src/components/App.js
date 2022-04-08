import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/quiz" component={Quiz}></Route>
            <Route exact path="/result" component={Result}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
