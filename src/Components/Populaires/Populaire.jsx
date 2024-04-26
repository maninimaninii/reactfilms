import React from 'react'
import './Populaire.css'
import all_films from '../Assets/all_films';
import { Item } from '../Item/Item';



export const Populaire = () => {
  const filtered_films = all_films.filter((film) => film.id === 1);
  return (
    <div className='populaire'>
      <h1>Films populaires en ce moment</h1>
      <div className="listeitems">
      {filtered_films.map((film) => (
          <Item key={film.id} title={film.title} category={film.category} image={film.image} />
        ))}
      </div>
    </div>
  )
}
