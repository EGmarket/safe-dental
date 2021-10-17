import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Main/Home';
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
