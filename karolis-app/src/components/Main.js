import React from 'react';
import ItemCard from './ItemCard';
import Jumbotron from './Jumbotron';
import data from './data/items.json';

export default function Main() {
    return (
        <main role="main">
    
          <Jumbotron />
    
          <div className="album py-5 bg-light">
            <div className="container">
    
              <div className="row">
             
                  {data.goods.map((item) => {
                    return <ItemCard itemInfo={item} />
                  })}
              </div>
          </div>
          </div>
    
        </main>
    )
}
