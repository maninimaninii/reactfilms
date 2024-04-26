import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image}/>

        <p>{props.title}</p>
    </div>
  )
}
