import React, { Component } from 'react'
import { Menu, Segment, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // debugger
    if (e.target.innerText === "Logout"){
      window.location.href = "https://reallycooltube.herokuapp.com/"
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <NavLink exact to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></NavLink>
          <NavLink exact to="/profile"><Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          /></NavLink>
        <NavLink exact to="/login"><Menu.Item
            name='login/signup'
            active={activeItem === 'login/signup'}
            onClick={this.handleItemClick}
          /></NavLink>
        <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
