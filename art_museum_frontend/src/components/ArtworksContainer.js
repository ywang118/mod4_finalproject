import React, {Component} from 'react'
import Artwork from './Artwork'

export default class ArtworksContainer extends Component {
  render() {
    return (
      <div>
      {this.props.artworks.map(artworkObj => <Artwork key={artworkObj.id} artwork={artworkObj} />)}
      <br />
      {this.props.startingIndex === 0 ? null : <button onClick={event=> this.props.goBack(event)}>Prev</button>}
      {"       "}
      {this.props.startingIndex === this.props.artworks[this.props.artworks.length -1] - 11 ? null : <button onClick={event=> this.props.moreArtwork(event)}>Next</button>}
      <br />
      <br />
      </div>
    )
  }
}
