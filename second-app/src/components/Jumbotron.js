import React from 'react'
import data from './data/items.json'

export default function Jumbotron() {

  const displaySum = (e) => {
    e.target.innerText = data.goods.reduce((sum, currentItem) => {
      return sum + +currentItem.price
    }, 0)
  }

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <button disabled
            href=""
            className="btn btn-primary my-2 mr-2"
          >
            Filter vegetables
          </button>
          <a href="/react" className="btn btn-secondary my-2" onClick={displaySum}>
            Display sum of all goods
          </a>
        </p>
      </div>
    </section>
  )
}
