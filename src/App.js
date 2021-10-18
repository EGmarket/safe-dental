import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Main/Home';
import Footer from './components/Common/Footer/Footer';
import Services from './components/Home/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Login from './components/Login/Login';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route  path="/services">
        <Services></Services>
      </Route>
      <PrivateRoute  path="/service/:serviceId">
        <ServiceDetail></ServiceDetail>
      </PrivateRoute>
      <Route  path="/login">
        <Login></Login>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  </AuthProvider>
  );
}

export default App;

