import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Banner from "./components/Banner/Banner";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food/:id">
          <FoodDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
