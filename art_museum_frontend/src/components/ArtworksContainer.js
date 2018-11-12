import React, {Component} from 'react'
import Artwork from './Artwork'

export default class ArtworksContainer extends Component {
  render() {
    // debugger
    return (
      <div className="artwork-container">
        {this.props.artworks.map(artworkObj =>
          <Artwork key={artworkObj.id}
          artwork={artworkObj}
          showModal={this.props.showModal}
          favoriteArtwork={this.props.favoriteArtwork}
          favorites={this.props.favorites}
          />)}
        <br />
      </div>
    )
  }
}
