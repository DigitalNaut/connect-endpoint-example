import React from 'react'

import './CatProfile.css';

export default function CatProfile({ name, image, age }) {
  return (
    <div className="profileContainer">
      <h3>{name}</h3>
      <span>Edad: {age}</span>
      <img src={image} alt={name} />
    </div>
  )
}
