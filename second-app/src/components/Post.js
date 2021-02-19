import React, { Component } from 'react'

export default class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
            hates: 0,
            image: {
                notDone: "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
                done: "https://cdn.dribbble.com/users/1363659/screenshots/3285428/done800x600.gif"
            }
        }
    }

    increaseLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    increaseHates = () => {
        this.setState({
            hates: this.state.hates + 1
        })
    }

    reset = () => {
        this.setState({
            hates: 0,
            likes: 0
        })
    }

    render() {
        return (
            <div className="col-4 mb-3">
                <div className="card mx-auto" style={{ width: "18rem" }}>
                    <img height="170" className="card-img-top" src={this.props.status ? this.state.image.done : this.state.image.notDone} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.taskContent}</h5>
                        <p className="card-text">id: {this.props.id}, status: {this.props.status.toString()}</p>
                        <button onClick={this.increaseLikes} className="btn btn-success">Like {this.state.likes}</button>
                        <button onClick={this.increaseHates} className="btn btn-danger mx-2">Hate {this.state.hates}</button>
                        <button onClick={this.reset} className="btn btn-info">Reset</button>
                        <button onClick={this.props.changeStatus} className="btn btn-secondary">{this.props.status ? 'Undo' : 'Done'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
