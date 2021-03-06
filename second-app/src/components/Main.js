import React from 'react'
import ItemCard from './ItemCard'
import Jumbotron from './Jumbotron'
import data from './data/items.json'

export default function Main() {

  return (
    <main role="main">
      <Jumbotron />
      <div className="album py-5 bg-light">
        <div className="container">
          <div id="goodsList" className="row">
            {data.goods.map((item) => {
              return <ItemCard key={item.id} itemInfo={item} />
            })}
            <h2 className="col-12 text-center">Daržovės</h2>
            {data.goods
              .filter((currentItem) => currentItem.category === 'daržovės')
              .map((item) => {
                return <ItemCard key={item.id} itemInfo={item} />
              })}
          </div>
        </div>
      </div>
    </main>
  )
}
