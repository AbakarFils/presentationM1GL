import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // Vous pouvez demander à React d’ignorer l’application d’un effet si certaines valeurs n’ont pas changé entre les rendus. [accessoires] (props)

  const handleInputChange = event => {
    const { firstName, value } = event.target

    setUser({ ...user, [firstName]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.firstName} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.email} onChange={handleInputChange} />
      <button className="btn bg-primary" >Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
