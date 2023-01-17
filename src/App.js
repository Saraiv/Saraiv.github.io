import { React, useState } from 'react'
import TopBar from './components/TopBar/TopBar'
import Window from './components/Window/Window'

const App = () => {
    const [lightMode, setLightMode] = useState(false)

    const onClickBodyHandler = () => {
        document.querySelector('#input').focus()
    }

    return (
        <div onClick={onClickBodyHandler} className={ lightMode ? 'ease-out duration-1000 light bg-gray-300' : 'ease-out duration-1000 bg-background-black'}>
            <div className='w-screen h-screen sm:p-10'>
                <div className='w-full h-full pb-10'>
                    <TopBar />
                    <Window setLightMode={setLightMode} lightMode={lightMode} />
                </div>
            </div>
        </div>
    )
}

export default App