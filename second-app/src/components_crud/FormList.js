import React from 'react'

export default function FormList(props) {
    if (props.usersList.length != 0) {
        return (
            <div className="col">
                <h2 className="mb-5">Users List</h2>
                <ul className="list-group">
                    {props.usersList.map(user => {
                        return (
                            <div key={user.id}>
                                <li className="list-group-item">
                                    <span className="text-success">{user.name} </span>
                                    <span className="text-secondary">{user.email} </span>
                                    <span className="text-warning">{user.password}</span>
                                    <button className="btn btn-info ml-5 mr-2" onClick={() => { props.editUser(user) }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => { props.deleteUser(user.id) }}>Delete</button>
                                </li>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div className="col my-auto">
                <h3 className="text-center">No users in the list</h3>
            </div>
        )
    }
}
