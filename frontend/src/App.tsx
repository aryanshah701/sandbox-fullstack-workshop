import "./App.css";
import { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PracticeOne from "./pages/PracticeOne";
import PracticeTwo from "./pages/PracticeTwo";
import PracticeThree from "./pages/PracticeThree";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/get-practice">
          <PracticeOne />
        </Route>
        <Route exact path="/update-practice">
          <PracticeTwo />
        </Route>
        <Route exact path="/delete-practice">
          <PracticeThree />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
