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
        {
          this.props.currentUser ?
          null
          :
          <NavLink exact to="/login"><Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          /></NavLink>
        }

        {
          this.props.currentUser ?
          <NavLink exact to="/profile"><Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          /></NavLink>
          :
          null
        }
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
