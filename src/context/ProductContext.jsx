import { createContext, useState, useEffect } from 'react';
import data from '../data/Products'


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [prodData, setProdData] = useState([]);
  


  useEffect(() => {
    const storedData = localStorage.getItem('products');
    
    if(storedData){
      setProdData(JSON.parse(storedData))
    }else{
      localStorage.setItem('products',JSON.stringify(data))
      setProdData(data);
    }
  //  setProdData(data);
  }, []);

  return (
    <ProductContext.Provider value={{ prodData, setProdData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
