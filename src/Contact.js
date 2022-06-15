import React, {useState} from 'react'
import Star from './Star'
const user='user5.png'
const Contact = () => {

  const [contact, setContact]=useState({
    firstName: "Bianca",
    lastName: "Alex",
    phone: "+1 (719) 555-1212",
    email: "vianca@gmail.com",
    isFav: false
  })

  // let starIcon=contact.isFav ? "white-star-icon.png" : "star-symbol.png"

  function toggleFav() {
    setContact(preVal => ({...preVal, isFav: !preVal.isFav}))
  }

  return (
    <main>
      <article className="card">

        <img src={`./images/${user}`} alt="user" className="card-image" />
        <div className="card-info">
          
          <Star isFilled={contact.isFav} handleClick={toggleFav}/>
          <h2>{contact.firstName} {contact.lastName}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  )

}

export default Contact
