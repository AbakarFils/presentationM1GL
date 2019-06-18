import React, { useState, Fragment } from 'react'
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';
import UserTable from '../tables/UserTable';

const Crud = () => {
    // Donnée
    const usersData = [
        { id: 1, firstName: 'Abakar', email: 'Mahamat' },
        { id: 2, firstName: 'Tony', email: 'Larson' },
        { id: 3, firstName: 'Adja', email: 'Oulimata' },
    ]

    const initialFormState = { id: null, firstName: '', email: '' }

    // afectation des objects
    const [ users, setUsers ] = useState(usersData)
    const [ currentUser, setCurrentUser ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    // les  operations CRUD
    const addUser = user => {
        user.id = users.length + 1
        setUsers([ ...users, user ])
    }

    const deleteUser = id => {
        setEditing(false)

        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, firstName: user.firstName, email: user.email })
    }

    return (
        <div className="container">
            <h1>CRUD App </h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <Fragment>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </Fragment>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}
export default Crud;