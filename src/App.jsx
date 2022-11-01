import { useState } from 'react'
import './App.css'
import { Hero } from './Components'
import {heroapi} from "./Data/Data"

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <main>
                <Hero heroapi={heroapi}/>
            </main>
        </div>
    )
}

export default App
