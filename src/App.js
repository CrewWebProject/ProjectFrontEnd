import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <switch>
            <Header />
            <Route path="/" exact component={Main} />
            <Footer />
            <Footer2 />
          </switch>
        </ConnectedRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
