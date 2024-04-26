import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css';


export const Navbar = () => {

    const [menu, setMenu] = useState('Acceuil');
  return (
    <div className='navbar'>
        <div className='navlogo'>
          <Link to={'/'}>
            <img src={logo} className='logo'></img></Link>
        </div>
        <nav className='navig'>
            <li>Profil
                <ul className="dropdown-menu">
                    <li><Link to='/login'>Se connecter</Link></li>
                    <li><Link to='/register'>S'inscrire</Link></li>
                </ul>
            </li>
            <li onClick={()=> {setMenu('Acceuil')}}> <Link to='/'>Accueil</Link>{menu==='Acceuil'?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu('Films')}}> <Link to='/films'>Films</Link>{menu==='Films'?<hr/>:<></>}</li>
            <li onClick={()=> {setMenu('Séries')}}> <Link to='/séries'>Séries</Link>{menu==='Séries'?<hr/>:<></>}</li>
       
        </nav>
    </div>
  )
}
