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
  state = {
    users: [],
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(userData => {
      console.log(userData)
      this.setState({
        users: userData
      })
    })
  }

  render(){
    
    return(
      <div className="App">
        <NavBar users={this.state.users}/>
        <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
