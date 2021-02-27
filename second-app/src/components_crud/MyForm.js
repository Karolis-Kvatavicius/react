import React, { Component } from 'react'
import FormList from "./FormList"

export default class MyForm extends Component {

    constructor() {
        super();
        this.state = {
            submit_btn: "Submit",
            users: [],
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
        let updatedUsers = this.state.users.filter((user) => user.id != userId);
        this.setState({
            users: updatedUsers
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
        if (evt.target.elements.submit.value == "Submit") {
            let updatedUsers = [
                ...this.state.users,
                {
                    id: this.state.id,
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                }
            ]

            this.setState({
                users: updatedUsers,
                id: Date.now(),
                name: "",
                email: "",
                password: ""
            })
        } else {
            this.setState({
                users: this.state.users.map((user) => {
                    if (user.id == this.state.id) {
                        user = {
                            id: this.state.id,
                            name: this.state.name,
                            email: this.state.email,
                            password: this.state.password
                        }
                    }
                    return user;
                }),
                id: Date.now(),
                name: "",
                email: "",
                password: "",
                submit_btn: "Submit"
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br></br>

                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} /><br></br>

                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} /><br></br>

                    <input type="submit" name="submit" value={this.state.submit_btn} /><br></br>

                </form>
                <FormList usersList={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </div>
        );
    }
}