import React, { Component } from 'react'
import { Menu, Segment, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' }


  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    // debugger
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu pointing secondary>

        <NavLink exact to="/"><Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={this.handleItemClick}
        /></NavLink>

        <NavLink exact to="/login"><Menu.Item
        name='login'
        active={activeItem === 'login'}
        onClick={this.handleItemClick}
        /></NavLink>
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
