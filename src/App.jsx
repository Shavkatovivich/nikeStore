import { useState } from 'react'
import './App.css'
import { Hero } from './Components'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <main>
                <Hero/>
            </main>
        </div>
    )
}

export default App
