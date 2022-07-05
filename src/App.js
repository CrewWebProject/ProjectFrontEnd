import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "./redux/configureStore";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        hello everyone!!
        <Route path="/"></Route>
      </ConnectedRouter>
    </div>
  );
}

export default App;
