import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/9/9e/John_Constable_-_English_Landscape_-_Google_Art_Project.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '90px 0'}}>
        <center>
          <input onChange={event => this.props.handleChange(event)} className="form-control" type="text" placeholder="Search for artwork" style={{maxWidth: '300px'}} />
        </center>
      </div>
    )
  }
}
