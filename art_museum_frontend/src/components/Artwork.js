import React from 'react'

const Artwork = ({artwork}) => {
  return(
    <div>
      <h4>{artwork.title}</h4>
      <img src={artwork.img} style={{maxWidth: '100px'}}/>
      {artwork.description ? <p>{ artwork.description }</p> : null}
      <hr />
    </div>
  )
}

export default Artwork
