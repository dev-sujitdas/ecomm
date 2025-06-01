import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';


const GroupCards = ({category, titleData, offer, link}) => {
  
    const {prodData} = useContext(ProductContext);
    
    const filteredData = prodData.filter(elem => elem.category === category).slice(0, 4);

  return (
    <div className='w-72 h-[23rem] p-3 justify-center bg-white rounded shadow-md'>
        <div>
            <h2 className='text-xl font-bold mb-5'>{titleData} | Upto {offer} off</h2>
        </div>
        <div className='flex flex-wrap gap-5 '>
            {filteredData.map((item, index)=>{
                 return <div key={index} className=''>
                <div className='w-[7rem] h-[5rem]'>
                    <img src={item.image} className='h-full w-full object-contain' alt="" />
                </div>
                <div>
                    <h3 className='text-sm'>{item.title.length > 14 ? item.title.slice(0,14): item.title}</h3>
                </div>
        </div>
      })}
        </div>
        <span className='mt-3 inline-block text-blue-400 text-sm'><Link to={link}>See more</Link></span>
    </div>
  )
}

export default GroupCards
