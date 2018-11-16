import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import ArtworksContainer from './components/ArtworksContainer'
import SideBar from './components/SideBar'
// import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  state = {
    users: [],
    currentUser: null,
    setEmail: "",
    setName: "",
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

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  setCurrentUser = (event) => {
    event.preventDefault()
    const user = this.state.users.find(userObj => userObj.name === this.state.setName && userObj.email === this.state.setEmail)
    this.setState({
      currentUser: user,
      setEmail: "",
      setName: ""
    }, () => {
      if (this.state.currentUser) {
        this.props.history.push('/')
      }
    })
  }

  logoutCurrentUser = (event) => {
    event.preventDefault()
    this.setState({
      currentUser: null,
      setEmail: "",
      setName: ""
    }, () => {this.props.history.push('/')})

  }

  render(){
    // console.log(this.state.userName)
    return(
      <div className="App">
        <NavBar users={this.state.users} currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path="/profile" render={(props) => <Profile logoutCurrentUser = {this.logoutCurrentUser} currentUser={this.state.currentUser}/>} />
            <Route exact path="/login" render={(props)=><Login setCurrentUser={this.setCurrentUser} handleChange={this.handleChange} setName={this.state.setName} setEmail={this.state.setEmail} />} />
            <Route exact path="/" render={(props) => <Home logoutCurrentUser = {this.logoutCurrentUser} currentUser={this.state.currentUser}/>} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
