import React from 'react'

const Artwork = ({artwork, showModal,favoriteArtwork}) => {
  return(
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <img onClick={event=> showModal(artwork)} src={artwork.img} style={{maxWidth: '200px', maxHeight: '400px'}}/>
        </div>
        <div className="col-9">
          <h4><b>{artwork.title}</b></h4>
          {artwork.dated ? <p>Dated: { artwork.dated }</p> : null}
          {artwork.culture ? <p>Culture: { artwork.culture }</p> : null}
          {artwork.medium ? <p>Medium: { artwork.medium }</p> : null}
          {artwork.division ? <p>Division: { artwork.division }</p> : null}
          {artwork.description ? <p>Description: { artwork.description }</p> : null}
          <br />
         <button onClick={event=>favoriteArtwork(event, artwork.id)} className="btn btn-outline-dark
         ">Favorite</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Artwork
