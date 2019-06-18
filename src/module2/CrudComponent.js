import React,  {Component, Fragment }  from  'react';
import EditUserForm from "../forms/EditUserForm";
import AddUserForm from "../forms/AddUserForm";
import UserTable from "../tables/UserTable";
import {getAll} from "../services/UserService";

class CrudComponent extends Component {

    constructor(props) {
       super(props);
       this.state = {
           users: [],
           loading: false,
           currentUser:null,
           editing: false
       }
    }

    MakeRequestFromServerAxios(){
        getAll()
            .then(res => {
                console.log('Reponse du serveur using Axios', res);
            })
            .catch(error=>{
                console.log('error catch petit', error);
            });

    }
    MakeRequestFromServerFetch() {
        try {
            fetch('api/users')
                .then((res) => res.json())
                .then(res => {
                    console.log('Reponse du serveur', res);
                    this.setState({users: res, loading: false})
                })
                .catch(error => {
                    console.log('error catch petit', error);
                    this.setState({ users: { data: []}, loading: false, showDialog: true });
                });
        }
        catch (error) {
            console.log('error catch grand', error);
            this.setState({
                users: { data: []},
                loading: false,
                error: 'Things went wrong, and the logic for error handling is irrelevant',
            });
        }
    }

    componentWillMount() {
        this.MakeRequestFromServerFetch();
        this.MakeRequestFromServerAxios();
    }

    // les  operations CRUD
    addUser = user => {

    };

     deleteUser = id => {

    };

     updateUser = (id, updatedUser) => {

    };

     editRow = user => {

    };
    setEditing =() => {

    };
    render() {
        return (
            <div className="container">
                <h1>CRUD App attaquant le serveur </h1>
                <div className="flex-row">
                    <div className="flex-large">
                        {this.state.editing ? (
                            <Fragment>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentUser={this.state.currentUser}
                                    updateUser={this.updateUser}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <h2>Add user</h2>
                                <AddUserForm addUser={this.addUser} />
                            </Fragment>
                        )}
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable users={this.state.users} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
                </div>
            </div>
        )
    }
}
export  default CrudComponent;