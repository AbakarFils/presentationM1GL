import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, firstName: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { firstName, value } = event.target

		setUser({ ...user, [firstName]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.firstName || !user.email) return;

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.firstName} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.email} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
