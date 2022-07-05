import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "./redux/configureStore";

import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <switch>
          <Header />
          <Route path="/"></Route>
          <Footer />
          <Footer2 />
        </switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
