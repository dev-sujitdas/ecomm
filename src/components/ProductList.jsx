import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard'
import { Link, useParams } from 'react-router-dom'


const ProductList = () => {

  const {prodData} = useContext(ProductContext)
  const {category} = useParams();

  const filteredData = prodData.filter((p)=>p.category === category);

  return (
    <div className='w-full  h-full px-5 py-5 bg-blue-50 '>
      <div className='w-full h-[12rem] bg-green-500'>
        <img src="https://img.freepik.com/free-psd/black-friday-big-sale-social-media-post-design-template_47987-25239.jpg?uid=R152704925&ga=GA1.1.1779151930.1745912405&semt=ais_items_boosted&w=740" 
        className='w-full h-full object-cover' alt="" />
      </div>
      <div className='w-full flex flex-wrap justify-center gap-5 mt-3'>
      {
      category ? filteredData.map((item, index) => <Link to={`/products/${item.id}`}><ProductCard key={index} item={item}/></Link>)
      : prodData.map((item, index) => <Link to={`/products/${item.id}`}><ProductCard key={index} item={item}/></Link>)
      }

      </div>
    </div>
  )
}

export default ProductList
