import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
