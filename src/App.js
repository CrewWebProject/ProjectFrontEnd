import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//컴포넌트
import Footer from './components/Footer';
// import Footer2 from "./components/Footer2";
import Header from './components/Header';

//페이지
import Main from './pages/Main';
import Works from './pages/Works';
import NotFound from './pages/Notfound';
import WorkDetail from './components/WorkDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/works" exact component={Works} />
          <Route path="/workdetail" exact component={WorkDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        {/* <Footer2 /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
