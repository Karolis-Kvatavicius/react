import React from 'react'

export default function ItemCard({ itemInfo }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" height="300" src={itemInfo.image} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{itemInfo.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">{itemInfo.price}</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">{itemInfo.name}</button>
            </div>
            <small className="text-muted">{itemInfo.category}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
