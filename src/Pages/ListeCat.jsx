import React from 'react'
import all_films from '../Components/Assets/all_films'
import all_series from '../Components/Assets/all_series'
import { Item } from '../Components/Item/Item'


export const ListeCat = (props) => {
    let all,message;

    if(props.category === 'films'){
         all = all_films;
         message = "Liste de tout les films";
    }else{
         all = all_series;
         message = "Liste de toutes les séries";
    }
  return (
    <div>
        <h1>{message}</h1>
        <div className='listeitems'>
            {all.map((film) => (
                <Item key={film.id} title={film.title} category={film.category} image={film.image} />
            ))}            
        </div>
    </div>
  )
}
