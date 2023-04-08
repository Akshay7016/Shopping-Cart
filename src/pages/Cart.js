import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator = accumulator + item.price
  }, 0);

  return (
    <div className='w-11/12 max-w-[1100px] mx-auto pt-6'>
      {
        cart.length > 0 ?
          (
            <div className='flex gap-12'>
              <div className='w-[60%]'>
                {
                  cart.map((item) => {
                    return <CartItem key={item.id} item={item} />
                  })
                }
              </div>

              <div className='w-[40%] flex flex-col justify-between pb-[80px]'>
                <div className='mt-[80px]'>
                  <h3 className='uppercase font-semibold text-xl text-gray-800'>your cart</h3>
                  <h1 className='uppercase font-semibold text-5xl text-green-700'>summary</h1>
                  <p className='mt-[25px] text-gray-700 font-semibold text-xl'>Total Items: <span className='font-normal'>{cart.length}</span></p>
                </div>

                <div>
                  <p className='text-gray-700 font-semibold text-xl'>Total Amount : {" "}
                    <span className='font-extrabold'>
                      ${totalAmount.toFixed(2)}
                    </span>
                  </p>

                  <button
                    className='w-full mt-[20px] py-3 px-10 bg-green-600 rounded-lg text-white uppercase font-bold
                    border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300'>
                    Checkout Now
                  </button>

                </div>
              </div>
            </div>
          ) :
          (
            <div className='h-[60vh] flex flex-col justify-center items-center gap-7'>
              <h3 className='text-gray-700 font-semibold text-xl '>Your cart is empty!</h3>
              <button
                className='py-3 px-10 bg-green-600 rounded-lg text-white uppercase font-semibold
                border-2 border-green-600 hover:bg-white hover:text-green-600 transition-all duration-300'
                onClick={() => navigate("/")}
              >
                Shop now
              </button>
            </div>
          )
      }

    </div>
  )
}

export default Cart