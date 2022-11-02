import React from 'react'
import Item from './Utils/Item'
import Title from './Utils/Title'

const Sales = ({endpoint: {title, items}}) => {
    // console.log(endpoint);
  return (
    <div>
        <Title title={title}/>
        <div className="">
            {/* <Item/> */}
            {items?.map((item, i) => (
                <Item {...item} key={i}/>
            ))}
        </div>
    </div>
  )
}

export default Sales