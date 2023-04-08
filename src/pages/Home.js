import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

import Spinner from '../components/Spinner';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error while fetching products data")
      setProducts([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className='w-11/12 max-w-[1100px] mx-auto py-12'>
      {
        isLoading ?
          <div className='h-[60vh] mx-auto flex justify-center items-center'>
            <Spinner />
          </div> :
          (products.length > 0 ?
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {
                products.map((product) => {
                  return <Product key={product.id} product={product} />
                })
              }
            </div>
            :
            <div className='h-[60vh] text-3xl text-red-600 flex justify-center items-center'>
              No Products Found!
            </div>

          )
      }
    </div>
  )
}

export default Home