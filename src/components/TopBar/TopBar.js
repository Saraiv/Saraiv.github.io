import React from 'react'
import {
    MyPortfolio,
    TerminalTitle
} from '../Constants/TextConstants'

const TopBar = () => {
    const onClickExitHandler = (e) => {
        window.open("", "_self")
        window.close()
    }

    const onClickMaximizeHandler = (e) => {
        //TODO
    }

    const onClickMinimizeHandler = (e) => {
        //TODO
    }

    return (
        <div className='flex  bg-top-bar-black text-white text-sm h-10 sm:rounded-t-lg'>
            
            <div className='flex w-2/3 lg:w-1/3 justify-start'>

                <div className='relative m-1 bg-terminal-tab rounded-tl-lg w-full'>
            
                    <span className='block py-1 text-center'>
                        {TerminalTitle}
                    </span>
                </div>
                
            </div>
            
            <div className='flex w-0 md:w-1/3 justify-center'>

                <span className='p-2 text-center relative hidden lg:block sm:hidden'>
                    {MyPortfolio}
                </span>

            </div>
            
            <div className='flex w-1/3 justify-end'>

                <span className='p-2 px-4 relative cursor-pointer hover:bg-black/25' onClick={onClickMinimizeHandler}>
                    _
                </span>

                <span className='p-2 px-4 relative cursor-pointer hover:bg-black/25' onClick={onClickMaximizeHandler}>
                    □
                </span>

                <span className='p-2 px-4 relative rounded-tr-lg cursor-pointer hover:bg-close-button-red' onClick={onClickExitHandler}>
                    x
                </span>

            </div>
            
        </div>
    )
}

export default TopBar