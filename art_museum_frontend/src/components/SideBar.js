import React from 'react'
import { Form } from 'semantic-ui-react'

const SideBar = ({chooseFavorite, backToHome, favorites, currentUser, logoutCurrentUser}) => {
  // debugger
  return(
    <React.Fragment>
     {
       currentUser ?
       <Form id="logout-form" onSubmit={logoutCurrentUser} >
         <button className="btn btn-outline-dark">Logout</button>
       </Form>
       :
       null
     }
      <h2>{currentUser ? `Welcome back, ${currentUser.name}!` : "Welcome! Please sign in to view your favorites"}</h2>
      <h4 onClick={backToHome}>All Artwork</h4>
      <h4>My Favorites:</h4>
      <div>
      {currentUser ?
        favorites.map(favoriteObj =>
          <p className="fav-title"
          onClick={event=> chooseFavorite(event, favoriteObj)}
          key={favoriteObj.id}>
          {favoriteObj.artwork.title}
          </p>)
        :
        null
      }
      </div>
    </React.Fragment>
  )
}

export default SideBar
