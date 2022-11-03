import { useState } from 'react'
import './App.css'
import { FlexContent, Hero, Sales } from './Components'
import {heroapi,popularsales, toprateslaes, highlight, sneaker} from "./Data/Data"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <main className='flex flex-col gap-16 relative'>
                <Hero heroapi={heroapi}/>
                <Sales endpoint = {popularsales} ifExists/>
                <FlexContent endpoint = {highlight} ifExists/>
                <Sales endpoint =  {toprateslaes}/>
                <FlexContent endpoint = {sneaker}/>
            </main>
        </div>
    )
}

export default App
