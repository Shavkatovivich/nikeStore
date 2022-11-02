import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Item = ({id, color, shadow, title, text, img, btn, rating, price}) => {

    // console.log(id);

  return (
    <>
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
            <div className="grid items-center justify-items-center">
                <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
                <div className="">
                    <div className="">
                        <h1>{price}</h1>
                    </div>
                </div>
                <div className="icon-style text-slate-900">
                    <StarIcon/> 
                    <h1>{rating}</h1>
                </div>
            </div>
            <div className="">
                <button className='icon-style text-slate-900' type='button'><ShoppingBagIcon/></button>
                <button className='' type="button">{btn}</button>
            </div>
            <div className="">
                <img className='' src={img} alt="img/item-img" />
            </div>
        </div>
    </>
  )
}

export default Item