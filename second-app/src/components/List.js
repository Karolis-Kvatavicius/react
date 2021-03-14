import React, { Component } from 'react'
import Post from './Post'

export default class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [
                { id: 1, status: false, taskContent: "Isnesti siuksles" },
                { id: 2, status: false, taskContent: "Isvesti suni" },
                { id: 3, status: false, taskContent: "Pagaminti pietus" },
                { id: 4, status: false, taskContent: "Sutvarkyti kambari" },
                { id: 5, status: false, taskContent: "Ismaudyti kate" },
                { id: 6, status: false, taskContent: "Ismokti React" },
                { id: 7, status: false, taskContent: "Ismokti Laravel" },
                { id: 8, status: false, taskContent: "Rasti raktus" },
                { id: 9, status: false, taskContent: "Susitvarkyti automobili" },
            ]
        }
    }

    do_undo = (id) => {
        this.setState({
            list: this.state.list.map((task) => {
                if (task.id === id) {
                    task.status = !task.status
                }
                return task
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    {this.state.list.map(task => {
                        return <Post changeStatus={() => this.do_undo(task.id)} key={task.id.toString()} id={task.id} status={task.status} taskContent={task.taskContent} />
                    })}
                </div>
            </div>
        )
    }
}

