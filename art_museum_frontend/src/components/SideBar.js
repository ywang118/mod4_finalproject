import React from 'react'

const SideBar = ({chooseFavorite, backToHome, favorites, currentUser}) => {
  // debugger
  return(
    <React.Fragment>
      <h2>{currentUser ? `Welcome back ${currentUser.name}` : "Welcome!"}</h2>
      <h4 onClick={backToHome}>All Artwork</h4>
      <h4>My Favorites:</h4>
      {favorites.map(favoriteObj => <p className="favorite-title" onClick={event=> chooseFavorite(event, favoriteObj)} key={favoriteObj.id}>{favoriteObj.artwork.title}</p>)}
    </React.Fragment>
  )
}

export default SideBar
