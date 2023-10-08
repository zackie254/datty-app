import React from 'react'
//import Person from '../actions/Actions'
import Actions from '../actions/Actions'
const Person = ({person,modifySuperficialChoices}) => {
  const{name,desc,age,image}=person;
  return (
    
     <div className="person">
      <h1>Person</h1>
      <div className="person-photo">
      <img src={`/images/users/${image}`} alt={name} />
      </div>
      <div className="person-description">
      <p className="person-name-age">
            {name}, <span> {age}</span>
      </p>
      <p className="person-info">{desc}</p>
      </div>
      <Actions
      person ={person}
      modifySuperficialChoices={modifySuperficialChoices}
      />
     </div>
    
    
    
   
  )
}

export default Person