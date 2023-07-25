import logo from './logo.svg';
import './App.css';
import Header from '../src/common/header/Header';
import Search from '../src/common/header/Search';
import {BrowserRouter as Router,Switch,} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Header />
    <Search />
   <Switch>
          {/* <Route path="/ exact">
            <About />
          </Route> */}
        </Switch>
    </Router>
   </>
  )
}

export default App;
