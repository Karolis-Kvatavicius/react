import React, { useState } from 'react'

export default function PostHooks() {

    const image = "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png";

    const [likes, increaseLikes] = useState(0);
    const [hates, increaseHates] = useState(0);
    const reset = () => {
        increaseLikes(0);
        increaseHates(0);
    }

    return (
        <div className="col-4 mb-3">
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img height="170" className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <button onClick={() => increaseLikes(likes + 1)} className="btn btn-success">Like {likes}</button>
                    <button onClick={() => increaseHates(hates + 1)} className="btn btn-danger mx-2">Hate {hates}</button>
                    <button onClick={() => reset()} className="btn btn-info">Reset</button>
                </div>
            </div>
        </div>
    )
}
