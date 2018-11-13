import React, { Component } from 'react'
import { Icon, Form } from 'semantic-ui-react'

class Profile extends Component {
  state = {
    profileImg: ""
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        profileImg: json.message
      })
    })
  }

  render() {
    return (
      <div>
      {this.props.currentUser ?
        <div className="profile-div row">
          <div className="col 2">
            <img className="profile-img" src={this.state.profileImg}/>
          </div>
          <div className="profile-info col 9">
            <h1> {this.props.currentUser.name} <span>{" "}<Icon size="small" name="map marker alternate"/>{`${this.props.currentUser.location.split(", ").slice(-2).join(", ")}`}</span></h1>
            <p><b>Bio: </b>{this.props.currentUser.bio}</p>
            <br />
            <h4><Icon name="user" />{"About:"}</h4>
            <hr />
            <br />
            <p className="profile-divider">BASIC INFO:</p>
            <br/>
            <p><b>Birthday: </b>{this.props.currentUser.birthday}</p>
            <p><b>Gender: </b>{this.props.currentUser.gender}</p>
            <br/>
            <p className="profile-divider">CONTACT INFO:</p>
            <br/>
            <p><b>Phone: </b>{this.props.currentUser.phone}</p>
            <p><b>Address: </b>{this.props.currentUser.location}</p>
            <p><b>Email: </b>{this.props.currentUser.email}</p>
            <br />
            <br />
            <Form id="logout-form" onSubmit={this.props.logoutCurrentUser} >
              <button className="btn btn-outline-dark">Logout</button>
            </Form>
            <br />
          </div>
          <div className="col 1">
          </div>
        </div>
      :
      <center><h1>Please sign in to view your profile!</h1></center>
      }
      </div>
    )
  }
}

export default Profile
