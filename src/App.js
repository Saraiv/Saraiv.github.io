import React from 'react'
import TopBar from './components/TopBar/TopBar'
import Window from './components/Window/Window'

const App = () => {
    return (
            <div className='w-screen h-screen p-10'>
                <TopBar />
                <Window />
            </div>
    )
}

export default App