
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Register from './Components/Register&Login/Register.js'
import Login from './Components/Register&Login/Login'
import Footer from './Components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import 
{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/products">
          <Products></Products>
          </PrivateRoute>
         
          <Route   path="/register">
            <Register></Register>
          </Route>
          <Route  ath="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
