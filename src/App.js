import React from 'react'
import TopBar from './components/TopBar/TopBar'
import Window from './components/Window/Window'

const App = () => {
    return (
            <div className='w-screen h-screen p-10'>
                <div className='w-full h-full pb-10'>
                    <TopBar />
                    <Window />
                </div>
            </div>
            
    )
}

export default App