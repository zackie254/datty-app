import React from 'react'

const Like = ({ userId, modifySuperficialChoices }) => {
  return (
    <div>
    <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_LIKED_USERS')}
    >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
    </div>
  )
}

export default Like