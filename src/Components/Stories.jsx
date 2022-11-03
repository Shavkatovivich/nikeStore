import React from 'react'
import Title from "../Components/Utils/Title"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {ClockIcon, HashtagIcon, HeartIcon} from "@heroicons/react/24/solid"


const Stories = ({story: {title, news }}) => {
  return (
    <>
        <div className="nike-container mb-11">
            <Title title={title}/>
            <div className="">
                <Splide>
                    {news.map((val, i) => (
                        <SplideSlide className='mb-0.5 ' key={i}>
                            <div className="relative grid gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                                <div className="flex items-center justify-center">
                                    <img className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg' src={val.img} alt={`img/story/${i}`} />
                                </div>
                                <div className="flex items-center justify-between w-full px-4">
                                    <div className="flex items-center gap-0.5">
                                        <HeartIcon className="icon-style text-red-500 w-5 h-5"/>
                                        <span className='text-xs font-bold'>{val.like}</span>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <ClockIcon className="icon-style w-4 h-4 text-black"/>
                                        <span className='text-xs font-bold'>{val.time}</span>
                                    </div>
                                    <div className="flex items-center gap-0.5">
                                        <HashtagIcon className="icon-style text-blue-600"/>
                                        <span className='text-xs font-bold text-blue-600'>{val.by}</span>
                                    </div>

                                </div>
                                    <div className="grid items-center justify-items-start px-4">
                                        <h1 className='text-base font-semibold lg:text-sm'>{val.title}</h1>
                                        <p className='text-sm text-justify lg:text-xs'>{val.text}</p>  
                                    </div>
                                    <div className="flex items-center justify-center px-4 w-full">
                                        <a className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme' href={val.url} target="_blank" role={"button"}>{val.btn}</a>
                                    </div>
                            </div>
                        </SplideSlide>
                    ))} 
                </Splide>
            </div>
        </div>
    </>
  )
}

export default Stories