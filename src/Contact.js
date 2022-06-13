import React, {useState} from 'react'

const user='user3.png'
const Contact = () => {

  const [contact, setContact]=useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "johndoe@gmail.com",
    isFav: true
  })

  let starIcon=contact.isFav ? "white-star-icon.png" : "star-symbol.png"

  function toggleFav() {
    setContact(preVal => ({...preVal, isFav: !preVal.isFav}))
  }
  return (
    <main>
      <article className="card">

        <img src={`./images/${user}`} className="card-image" />
        <div className="card-info">
          <img className="card-star" src={`./images/${starIcon}`} alt="Star Icon" onClick={toggleFav}/>

          <div className="card-like">
            <span className="fi fi-thumbs-up-black"></span>
          </div>

          <h2>{contact.firstName} {contact.lastName}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  )

}

export default Contact
