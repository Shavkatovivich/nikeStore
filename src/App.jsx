import { useState } from 'react'
import './App.css'
import { FlexContent, Footer, Hero, Navbar, Sales, Stories } from './Components'
import {heroapi,popularsales, toprateslaes, highlight, sneaker, story, footerAPI} from "./Data/Data"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <main className='flex flex-col gap-16 relative'>
                <Navbar/>
                <Hero heroapi={heroapi}/>
                <Sales endpoint = {popularsales} ifExists/>
                <FlexContent endpoint = {highlight} ifExists/>
                <Sales endpoint =  {toprateslaes}/>
                <FlexContent endpoint = {sneaker}/>
                <Stories story = {story}/> 
                <Footer footerAPI={footerAPI}/>
            </main>
        </div>
    )
}

export default App
