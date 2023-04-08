import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import Logo from '../assets/logo.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { cart } = useSelector((state) => state);

    return (
        <div className='w-11/12 max-w-[1100px] mx-auto flex justify-between items-center'>
            <NavLink to="/">
                <div>
                    <img src={Logo} alt="logo" width={172} />
                </div>
            </NavLink>

            <div className='flex gap-5'>
                <NavLink to="/">
                    <div className='text-white hover:text-green-400 transition-all duration-400'>
                        Home
                    </div>
                </NavLink>

                <NavLink to="/cart">
                    <div className='relative'>
                        <FaShoppingCart className='text-2xl text-white hover:text-green-400 transition-all duration-400' />
                        {
                            cart.length > 0 &&
                            <div className='animate-bounce absolute -top-[6px] -right-2 text-xs w-5 h-5 
                            flex items-center justify-center rounded-full text-white bg-green-600'>
                                {cart.length}
                            </div>
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar