import React from 'react'

export default function FormList(props) {
    if (props.usersList.length != 0) {
        return (
            <div className="col mb-5">
                <h2 className="mb-5">Users List</h2>
                <ul className="list-group">
                    {props.usersList.map(user => {
                        return (
                            <div key={user.id}>
                                <li className="list-group-item d-flex justify-content-between">
                                    <div>
                                        <span className="text-success">{user.name} </span>
                                        <span className="text-secondary">{user.email} </span>
                                        <span className="text-warning">{user.password}</span>
                                    </div>
                                    <div>
                                        <button className="btn btn-info mx-1" onClick={() => { props.editUser(user) }}>Edit</button>
                                        <button className="btn btn-danger mx-1" onClick={() => { props.deleteUser(user.id) }}>Delete</button>
                                    </div>
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
            <div className="col my-auto mb-5">
                <h3 className="text-center">No users in the list</h3>
            </div>
        )
    }
}
