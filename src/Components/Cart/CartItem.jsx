import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
    return (
        <>
            <div className="flex items-center justify-between  w-full px-5 ">
                <div className="flex items-center gap-5">
                    <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
                        <img className='w-36 h-auto object-fill lg:w-28' src={img} alt={`img/cart-item/${id}`} />
                    </div>
                    <div className="grid items-center gap-4 ">
                        <div className="grid items-center leading-none">
                            <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
                            <p className='text-sm text-slate-800 lg:text-sm'>{text}</p>
                        </div>
                        <div className="flex items-center  justify-around w-full">
                            {/* <div className=""> */}
                            <button className='bg-theme-cart rounded w-6 h-6 lg:w-5  lg:h-5 flex items-center justify-center active:scale-90' type='button'>
                                <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' />
                            </button>
                            <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
                            <button className='bg-theme-cart rounded w-6 h-6 lg:w-5  lg:h-5 flex items-center justify-center active:scale-90' type='button'>
                                <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]' />
                            </button>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="grid items-center gap-5 justify-center">
                    <div className="grid items-center justify-center">
                        <h1 className='text-lg lg:text-base text-slate-900 font-medium'>${price * cartQuantity}</h1>
                    </div>
                    <div className="">
                        <button className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center' type='button'>
                            <TrashIcon className='w-5 h-5 text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem