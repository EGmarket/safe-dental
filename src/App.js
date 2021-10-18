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
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from "./NotFound/NotFound";
import FullTeams from './components/FullTeams/FullTeams';

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
      <Route exact path="/teams">
        <FullTeams></FullTeams>
      </Route>
      <PrivateRoute  path="/service/:serviceId">
        <ServiceDetail></ServiceDetail>
      </PrivateRoute>
      <PrivateRoute  path="/teams/:memberId">
        <TeamDetails></TeamDetails>
      </PrivateRoute>
      <Route  path="/login">
        <Login></Login>
      </Route>
      <Route  path="*">
       <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer/>
  </Router>
  </AuthProvider>
  );
}

export default App;

