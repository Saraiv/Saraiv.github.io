import React from 'react'

const TopBar = () => {
    const onClickExitHandler = (e) => {
        window.open("", "_self")
        window.close()
    }

    const onClickMaximizeHandler = (e) => {
        
    }

    const onClickMinimizeHandler = (e) => {
        
    }

    return (
        <div className='flex  bg-top-bar-black text-white text-sm h-10 rounded-t-lg'>
            <div className='flex w-1/3 justify-start'>
                <div className='relative m-1 bg-terminal-tab rounded-tl-lg w-full'>
                    <span className='block py-1 text-center'>
                        Saraiva's Terminal
                    </span>
                </div>
                
            </div>
            <div className='flex w-1/3 justify-center'>
                <span className='p-2 text-center relative'>
                    Saraiva's Portfolio
                </span>
            </div>
            <div className='flex justify-end w-1/3'>
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