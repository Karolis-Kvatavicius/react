import React, { Component } from 'react'
import FormList from "./FormList"
import swal from 'sweetalert'

export default class MyForm extends Component {

    constructor() {
        super();
        this.state = {
            submit_btn: "Submit",
            users: JSON.parse(localStorage.getItem('myList')),
            id: Date.now(),
            name: '',
            email: '',
            password: ''
        };
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    deleteUser = (userId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user info!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let updatedUsers = this.state.users.filter((user) => user.id != userId);
                    this.setState({
                        users: updatedUsers
                    });
                    localStorage.setItem('myList', JSON.stringify(updatedUsers));
                    swal("Poof! User has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your user info is safe!");
                }
            });
    }

    editUser = (user) => {
        this.setState({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            submit_btn: "Change"
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        let updatedUsers;
        if (evt.target.elements.submit.value == "Submit") {
            updatedUsers = [
                ...this.state.users,
                {
                    id: this.state.id,
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                }
            ]
            swal("Congrats! You entered a new user!");
        } else {
            updatedUsers = this.state.users.map((user) => {
                if (user.id == this.state.id) {
                    user = {
                        id: this.state.id,
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password
                    }
                }
                return user;
            })
            swal("User info has been updated!");
        }

        this.setState({
            users: updatedUsers,
            id: Date.now(),
            name: "",
            email: "",
            password: "",
            submit_btn: "Submit"
        });

        localStorage.setItem('myList', JSON.stringify(updatedUsers));
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col col-lg-6 col-12 mb-5">
                    <h2 className="mb-5">Enter new user</h2>
                    <form onSubmit={this.handleSubmit}>

                        <label className="text-success">Name</label>
                        <input className="form-control w-50" type="text" name="name" onChange={this.handleChange} value={this.state.name} />

                        <label className="text-secondary mt-4">Email</label>
                        <input className="form-control w-50" type="text" name="email" onChange={this.handleChange} value={this.state.email} />

                        <label className="text-warning mt-4">Password</label>
                        <input className="form-control w-50" type="password" name="password" onChange={this.handleChange} value={this.state.password} />

                        <input className="form-control btn btn-success w-50  mt-4" type="submit" name="submit" value={this.state.submit_btn} />

                    </form>
                </div>
                <FormList usersList={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </div>
        );
    }
}