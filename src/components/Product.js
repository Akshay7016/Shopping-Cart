import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import { add, remove } from '../redux/slice/cartSlice';

const Product = ({ product }) => {
    const { id, title, price, description, image } = product;
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const isItemPresentInCart = cart.some((item) => item.id === id);

    const addProductToCart = () => {
        dispatch(add(product));
        toast.success("Item added to cart!")
    };

    const removeProductFromCart = () => {
        dispatch(remove(id));
        toast.error("Item removed from cart!")
    };

    return (
        <div className='p-4 rounded-xl flex flex-col justify-between items-center gap-3 border
        shadow-md hover:scale-110 transition-all duration-300 ease-in'>
            <h3 className='w-40 font-semibold text-lg text-left truncate text-gray-700 mt-1'>
                {title}
            </h3>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
                {description.split(" ").slice(0, 10).join(" ") + "..."}
            </p>
            <div className='h-[180px]'>
                <img src={image} alt="product" className='w-full h-full' />
            </div>
            <div className='w-full flex items-center justify-between mt-[20px]'>
                <p className='text-green-600 font-semibold'>${price}</p>
                {
                    isItemPresentInCart ?
                        (
                            <button
                                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                                text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all
                                duration-300 ease-in'
                                onClick={removeProductFromCart}>
                                Remove Item
                            </button>
                        ) :
                        (
                            <button
                                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                                text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all
                                duration-300 ease-in'
                                onClick={addProductToCart}>
                                Add to cart
                            </button>
                        )
                }



            </div>
        </div>
    )
}

export default Product