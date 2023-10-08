import React from 'react'

const Dislike = ({ userId, modifySuperficialChoices }) => {
  return (
    <div>
         <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="images/misc/dislike.png" alt="Dislike User" />
  </button>
    </div>
  )
}

export default Dislike