
import './App.css';
// bootstrap css use
import 'bootstrap/dist/css/bootstrap.min.css';

// react-router-dom use
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//all component import
import Home from './component/Home/Home';
import About from './component/About/About';
import Serve from './component/Serve/Serve';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/serve">
            <Serve></Serve>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
