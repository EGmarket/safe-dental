import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header/Header';

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
