import React from 'react'

const ProductCard = ({item}) => {

  return (
    <div className='w-64 h-[20rem] p-1 bg-white rounded shadow-md '>      
      <div className='w-full h-1/2 overflow-hidden cursor-pointer'>
        <img src={item.image} className='w-full h-full object-contain hover:scale-110' alt="" />
      </div>
      <div className='w-full px-1 pt-3 cursor-pointer'>
        <h2 className='text-md'>{item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</h2>
        <h2 className='text-lg font-semibold mt-4'>${item.price}</h2>
        <h3 className='font-semibold text-blue-400'>23% off</h3>
      </div>
    </div>
  )
}

export default ProductCard
