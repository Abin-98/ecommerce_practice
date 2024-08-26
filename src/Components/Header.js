import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"; 
import { Cart } from './Context';
const Header = () => {
  const {cart}=useContext(Cart);
  return (
    <div>
      <span className='header'>React Context API lesson</span>
      <ul className='nav'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/cart'>Cart {cart.length>0?"("+cart.length+")":""}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
