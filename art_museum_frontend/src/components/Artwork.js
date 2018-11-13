import React from 'react'
import { Icon } from 'semantic-ui-react'

const Artwork = ({artwork, showModal,favoriteArtwork, favorites, currentUser}) => {
  return(
    <React.Fragment>
      <div className="artwork row">
        <div className="art-image col-3">
          <img onClick={event=> showModal(artwork)} src={artwork.img} style={{maxWidth: '200px', maxHeight: '400px'}}/>
        </div>
        <div className="art-desc col-9">
          <h4 className="art-title"><b>{artwork.title}</b></h4>
          {artwork.dated ? <p>Dated: { artwork.dated }</p> : null}
          {artwork.culture ? <p>Culture: { artwork.culture }</p> : null}
          {artwork.medium ? <p>Medium: { artwork.medium }</p> : null}
          {artwork.division ? <p>Division: { artwork.division }</p> : null}
          {artwork.description ? <p>Description: { artwork.description }</p> : null}
          <br />
          {
            currentUser ?
            <div>
              {favorites.find(favoriteObj => favoriteObj.artwork_id === artwork.id) ?
              <button onClick={event=>favoriteArtwork(event, artwork.id)} className="btn btn-outline-dark">
              <Icon name='heart' />
              {"Unfavorite"}
              </button> :
              <button onClick={event=>favoriteArtwork(event, artwork.id)} className="btn btn-outline-dark">
              <Icon name='heart outline'/>
              {"Favorite"}
              </button>}
            </div>
              :
              null
          }
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Artwork
