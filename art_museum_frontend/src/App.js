import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import ArtworksContainer from './components/ArtworksContainer'

class App extends Component {
  state = {
    artworks: [],
    startingIndex: 0,
    numArtworks: 5,
    searchTerm: ""
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


  render() {
    return (
      <div className="App">
        <Header artworks={this.state.artworks} handleChange={this.handleChange} />
        <ArtworksContainer
        startingIndex={this.state.startingIndex}
        moreArtwork={this.moreArtwork}
        goBack={this.goBack}
        artworks={this.state.searchTerm === "" ? this.displayArtwork() : this.filterArtworks()}
        />
      </div>
    );
  }
}

export default App;
