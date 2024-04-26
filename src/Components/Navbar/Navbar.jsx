import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {

    const [menu, setMenu] = useState('Acceuil');
  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={logo} className='logo'></img>
        </div>
        <nav className='navig'>
            <li onClick={()=> {setMenu('Acceuil')}}> <Link to='/'>Acceuil</Link>{menu==='Acceuil'?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu('Films')}}> <Link to='/films'>Films</Link>{menu==='Films'?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu('Séries')}}> <Link to='/séries'>Séries</Link>{menu==='Séries'?<hr/>:<></>}</li>
       
        </nav>
    </div>
  )
}
