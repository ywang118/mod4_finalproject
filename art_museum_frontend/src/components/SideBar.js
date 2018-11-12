import React from 'react'

const SideBar = ({chooseFavorite, backToHome, favorites}) => {
  // debugger
  return(
    <React.Fragment>
      <h2>Sidebar</h2>
      <h4 onClick={backToHome}>All Artwork</h4>
      <h4>My Favorites:</h4>
      {favorites.map(favoriteObj => <p onClick={event=> chooseFavorite(event, favoriteObj)} key={favoriteObj.id}>{favoriteObj.artwork.title}</p>)}
    </React.Fragment>
  )
}

export default SideBar
