import { useState } from 'react'
import './App.css'
import { Hero, Sales } from './Components'
import {heroapi,popularsales, toprateslaes} from "./Data/Data"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <main>
                <Hero heroapi={heroapi}/>
                <Sales/>
                <Sales/>
            </main>
        </div>
    )
}

export default App
