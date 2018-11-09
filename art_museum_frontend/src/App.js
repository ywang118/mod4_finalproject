import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ArtworksContainer from './components/ArtworksContainer'
import SideBar from './components/SideBar'
// import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  state = {
    artworks: [],
    startingIndex: 0,
    numArtworks: 10,
    searchTerm: "",
    show: false,
    selectedImage: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/artworks')
    .then(response => response.json())
    .then(artworkData => {
      console.log(artworkData)
      this.setState({
        artworks: artworkData
      })
    })
  }

  displayArtwork = () => {
    return this.state.artworks.slice(this.state.startingIndex, this.state.startingIndex + this.state.numArtworks)
  }

  moreArtwork = (event) => {
    console.log(event.target)
    this.setState(currentState => ({
      startingIndex: currentState.startingIndex + this.state.numArtworks
    }))
  }

  goBack = (event) => {
    console.log(event.target)
    if (this.state.startingIndex - this.state.numArtworks >=0) {
      this.setState(currentState => ({
        startingIndex: currentState.startingIndex - this.state.numArtworks
      }))
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }

  filterArtworks = () => {
    return this.state.artworks.filter(artworkObj => artworkObj.title.toLowerCase().includes(this.state.searchTerm)).slice(this.state.startingIndex, this.state.startingIndex + this.state.numArtworks)
  }

  showModal = (artworkObj) => {
    this.setState({
      show: true,
      selectedImage: artworkObj.img
      })
  }

  hideModal = () => {
    this.setState({ show: false });
  }


  render() {
    return (
      <div className="App">
        <Header artworks={this.state.artworks} handleChange={this.handleChange} />
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <div>
              <img src={this.state.selectedImage} style={{maxHeight: '750px', maxWidth: '750px'}}/>
            </div>
          </Modal>
          <div className='col-9'>
            <ArtworksContainer
            startingIndex={this.state.startingIndex}
            artworks={this.state.searchTerm === "" ? this.displayArtwork() : this.filterArtworks()}
            showModal={this.showModal}
            />
          </div>
        </div>
        <center>
          {this.state.startingIndex === 0 ? null : <button onClick={event=> this.goBack(event)} className="btn btn-outline-dark">Prev</button>}
          {"       "}
          {this.state.startingIndex === 500 ? null : <button className="btn btn-outline-dark" onClick={event=> this.moreArtwork(event)}>Next</button>}
        </center>
        <br />
        <br />
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div onClick={handleClose} className={showHideClassName}>
      <section className='modal-main'>
        <center>
        {children}
        </center>
      </section>
    </div>
  );
}

export default App;
