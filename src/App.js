import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./redux/configureStore";

import { ThemeProvider } from "styled-components";
import theme from "./elements/Theme";
import "./App.css";

//컴포넌트
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";

//페이지
import Main from "./pages/Main";
import Works from "./pages/Works";
import Performance from "./pages/Performance";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/works" exact component={Works} />
            <Route path="/performance" exact component={Performance} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          {/* <Footer2 /> */}
        </ConnectedRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
