import React, {Component} from 'react'
import NavBar from './NavBar'
import { Input } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <div className="header" style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/9/9e/John_Constable_-_English_Landscape_-_Google_Art_Project.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '170px 0'}}>
        <center>
          <Input fluid onChange={event => this.props.handleChange(event)} icon="search" type="text" placeholder="Search for artwork..." style={{maxWidth: '300px'}} />
        </center>
      </div>
    )
  }
}
