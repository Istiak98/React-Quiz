import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <PublicRoute
                exact
                path="/signup"
                component={Signup}
              ></PublicRoute>
              <PublicRoute exact path="/login" component={Login}></PublicRoute>
              <PrivateRoute exact path="/quiz" component={Quiz}></PrivateRoute>
              <PrivateRoute
                exact
                path="/result"
                component={Result}
              ></PrivateRoute>
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
