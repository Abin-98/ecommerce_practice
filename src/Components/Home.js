import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct';
import './styles.css'

faker.seed(100 );
const Home = () => {

    const productsArray = [...Array(30)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
    }));
    
    const [products]=useState(productsArray)
  return (
    <div className='productContainer'>
      {products.map((prod)=>(
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default Home
