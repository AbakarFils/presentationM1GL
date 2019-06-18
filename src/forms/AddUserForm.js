import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, firstName: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.email || !user.firstName) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input id="firstName" type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
			<label>Username</label>
			<input id="firstName" type="text" name="email" value={user.email} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
