import React from 'react'

const Superlike = ({ userId, modifySuperficialChoices }) => {
  return (
    <div>
          <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}
  >
    <img src="images/misc/superlike.png" alt="Superlike User" />
  </button>
    </div>
  )
}

export default Superlike