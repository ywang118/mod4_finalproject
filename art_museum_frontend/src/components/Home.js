import React, { Component } from 'react';

import '../App.css';
import Header from './Header'
import ArtworksContainer from './ArtworksContainer'
import SideBar from './SideBar'
import { Icon } from 'semantic-ui-react'
// import { Grid, Row, Col } from 'react-bootstrap'

class Home extends Component {
  state = {
    artworks: [],
    favorites: [],
    startingIndex: 0,
    numArtworks: 10,
    searchTerm: "",
    show: false,
    selectedImage: null,
    selectedFavorite: null,
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/artworks')
    .then(response => response.json())
   .then(artworkData => {
     console.log(artworkData)
     this.setState({artworks: artworkData})
   })

   fetch('http://localhost:3000/api/v1/favorites')
   .then(response => response.json())
   .then(favoriteData => {
     console.log(favoriteData)
     this.setState({
       favorites: favoriteData
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

  favoriteArtwork = (event, artworkId) => {
   console.log(event.target)
   const updatedArtworks = this.state.artworks.map(artworkObj => {
     if (artworkObj.id === artworkId) {
       if (this.state.favorites.find(favoriteObj => favoriteObj.artwork_id === artworkId)) {
         const selectedFavorite = this.state.favorites.find(favoriteObj => {
           return favoriteObj.artwork_id === artworkId
         })
         this.deleteFavorite(selectedFavorite)
       } else {
         this.newFavorite(artworkObj)
       }
     }
     return artworkObj
   })
   this.setState({
     artworks: updatedArtworks
   })
 }

 newFavorite = (artworkObj) => {
   fetch('http://localhost:3000/api/v1/favorites', {
     'method': 'POST',
     'headers': {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     'body': JSON.stringify({
       'artwork_id': artworkObj.id,
       'user_id': 1,
       'note': 'this note will be filled in by user'
     })
   })
   .then(response => response.json())
   .then(json => {
     console.log(json)
     this.setState({
       favorites: [json, ...this.state.favorites]
     })
   })
 }

  deleteFavorite = (favorite) => {
    fetch(`http://localhost:3000/api/v1/favorites/${favorite.id}`, {
      'method': 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        favorites: this.state.favorites.filter(favoriteObj => favoriteObj.id !== favorite.id),
        selectedFavorite: null
      })
    })
  }

  chooseFavorite = (event, favorite) => {
    console.log(event.target)
    this.setState({
      selectedFavorite: favorite
    })
  }

  backToHome = () => {
    this.setState({
      selectedFavorite: null
    })
  }

  render() {
    console.log(this.state.favorites)
    return (
      <div className="home">
        <Header artworks={this.state.artworks} handleChange={this.handleChange} />
        <div className="row">
          <div className="sidebar col-3">
            <SideBar chooseFavorite={this.chooseFavorite} backToHome={this.backToHome} favorites={this.state.favorites}/>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <div>
              <img src={this.state.selectedImage} style={{maxHeight: '750px', maxWidth: '750px'}}/>
            </div>
          </Modal>
          <div className='artwork-col col-9'>
          { this.state.selectedFavorite ?
            <div className="favorite-div artwork row">
              <div className="art-image col-3">
                <img onClick={event=> this.showModal(this.state.selectedFavorite.artwork)} src={this.state.selectedFavorite.artwork.img} style={{maxWidth: '200px', maxHeight: '400px'}}/>
              </div>
              <div className="art-desc col-9">
                <h4><b>{this.state.selectedFavorite.artwork.title}</b></h4>
                {this.state.selectedFavorite.artwork.dated ? <p>Dated: { this.state.selectedFavorite.artwork.dated }</p> : null}
                {this.state.selectedFavorite.artwork.period ? <p>Period: { this.state.selectedFavorite.artwork.period }</p> : null}
                {this.state.selectedFavorite.artwork.people ? <p>Artist: { this.state.selectedFavorite.artwork.people }</p> : null}
                {this.state.selectedFavorite.artwork.culture ? <p>Culture: { this.state.selectedFavorite.artwork.culture }</p> : null}
                {this.state.selectedFavorite.artwork.classification ? <p>Classification: { this.state.selectedFavorite.artwork.classification }</p> : null}
                {this.state.selectedFavorite.artwork.medium ? <p>Medium: { this.state.selectedFavorite.artwork.medium }</p> : null}
                {this.state.selectedFavorite.artwork.division ? <p>Division: { this.state.selectedFavorite.artwork.division }</p> : null}
                {this.state.selectedFavorite.artwork.diminsions ? <p>Dimensions: { this.state.selectedFavorite.artwork.diminsions }</p> : null}
                {this.state.selectedFavorite.artwork.accessionyear ? <p>Accession Year: { this.state.selectedFavorite.artwork.accessionyear }</p> : null}
                {this.state.selectedFavorite.artwork.description ? <p>Description: { this.state.selectedFavorite.artwork.description }</p> : null}
                <br />
                {this.state.favorites.find(favoriteObj => favoriteObj.artwork_id === this.state.selectedFavorite.artwork.id) ?
                  <button onClick={event=>this.favoriteArtwork(event, this.state.selectedFavorite.artwork.id)} className="btn btn-outline-dark">
                <Icon name='heart' />
                {"Unfavorite"}
                </button> :
                <button onClick={event=>this.favoriteArtwork(event, this.state.selectedFavorite.artwork.id)} className="btn btn-outline-dark">
                <Icon name='heart outline'/>
                {"Favorite"}
                </button>}
              </div>
            </div>
            :
            <div>
            <ArtworksContainer
            startingIndex={this.state.startingIndex}
            artworks={this.state.searchTerm === "" ? this.displayArtwork() : this.filterArtworks()}
            showModal={this.showModal}
            favoriteArtwork={this.favoriteArtwork}
            favorites={this.state.favorites}
            />
            <center className="button-div">
              {this.state.startingIndex === 0 ? null : <button onClick={event=> this.goBack(event)} className="btn btn-outline-dark">Prev</button>}
              {this.state.startingIndex === 500 ? null : <button className="btn btn-outline-dark" onClick={event=> this.moreArtwork(event)}>Next</button>}
              </center>
            </div>
          }
          </div>
        </div>
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

export default Home;
