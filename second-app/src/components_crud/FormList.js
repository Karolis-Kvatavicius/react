import React from 'react'

export default function FormList(props) {

    return (
        <div>
            <ul>
                {props.usersList.map(user => {
                    return (
                        <div key={user.id}>
                            <li>{user.name} {user.email} {user.password}</li>
                            <button onClick={() => { props.editUser(user) }}>Edit</button>
                            <button onClick={() => { props.deleteUser(user.id) }}>Delete</button>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}
