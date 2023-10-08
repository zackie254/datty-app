import React from 'react'
import LikedPerson from '../actions/LikedPerson';
const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => {
  return (
    <div id="lonely">Lonely
     <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>
    <p>
        {likedUsers.length > 0
          ? "People you liked...let's hope they like you too!"
          : ''}
      </p>
      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
      <p>{superLikedUsers.length > 0 ? 'People you super liked!' : ''}</p>

{superLikedUsers.map(item => (
  <LikedPerson key={item.id} person={item} />
))}

    </div>
  )
}

export default Lonely