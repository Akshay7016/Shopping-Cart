import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { remove } from '../redux/slice/cartSlice';

const CartItem = ({ item }) => {
    const { id, title, price, description, image } = item;
    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(remove(id));
        toast.error("Item removed from cart!")
    };

    return (
        <div className='p-8 flex gap-12 border-b-2 border-slate-500 last:border-none'>
            <div className='w-[300px]'>
                <img src={image} alt="item" className='w-full h-[80%]' />
            </div>

            <div className='flex flex-col gap-5'>
                <h3 className='font-semibold text-xl text-gray-700'>
                    {title}
                </h3>
                <p className='text-slate-500  text-base text-left'>
                    {description.split(" ").slice(0, 15).join(" ") + "..."}
                </p>
                <div className='flex items-center justify-between'>
                    <p className='text-green-600 font-extrabold text-lg'>${price}</p>
                    <div
                        className='w-[40px] aspect-square bg-red-200 flex items-center 
                    justify-center rounded-full cursor-pointer hover:bg-red-400
                    text-red-900 hover:text-white transition-all duration-300'
                        onClick={removeItemFromCart}>
                        <MdDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem