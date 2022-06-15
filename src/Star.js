import React from 'react'

const Star = (props) => {
    let starIcon=props.isFilled ? "white-star-icon.png" : "star-symbol.png"
  return (
    <div>
        <img className="card-star" src={`./images/${starIcon}`} alt="Star Icon" onClick={props.handleClick}/>
    </div>
  )
}

export default Star