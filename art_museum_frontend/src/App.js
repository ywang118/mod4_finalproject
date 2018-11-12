import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import { Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Login from './components/Login'
import ArtworksContainer from './components/ArtworksContainer'
import SideBar from './components/SideBar'
// import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render(){
    return(
      <div className="App">

        <NavBar />
        <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
