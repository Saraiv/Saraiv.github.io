import { React, useEffect, useState } from 'react'

const Window = () => {
    const [windSize, setWindowSize] = useState(1920)
    const [maxLength, setMaxLength] = useState(0)

    const handleClickLinkGithub = () => {
        window.open('https://github.com/Saraiv/', '_blank')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        //TODO
        switch(e.target.input.value){
            case 'help':
                break
            default:
                window.alert('Dont try to cheat the system please :)')
        }
    }
    
    //TODO
    const handleOnChangeInput = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect (() => {
        if(windSize <= 1920 && windSize >= 1024) setMaxLength(80)
        else if(windSize < 1024 && windSize >= 640) setMaxLength(60)
        else if(windSize < 640) setMaxLength(50)
    }, [windSize])

    return (
        <div className='shadow-lg shadow-black/20 w-full h-full bg-background-console sm:rounded-b-lg text-white p-4 text-sm'>
            <div className='grid grid-cols-1'>
                <strong>
                    Saraiva's Terminal
                </strong>
                <span>
                    Copyright João Saraiva. All rights reserved.
                </span>
            </div>
            <div className='grid grid-cols-1 mt-10'>
                <span>
                    Visit my GitHub to keep up with my projects and future ones: <span onClick={handleClickLinkGithub} className='hover:underline hover:underline-offset-1 cursor-pointer'>https://github.com/Saraiv/</span>
                </span>
                <span>
                    Contact me by email! mainsaraiva@gmail.com
                </span>
                <span>
                    Try typing ‘help’.
                </span>
            </div>
            <div className='grid grid-cols-1 mt-10'>
                <span className='w-72'>
                    $PATH/saraivas-portfolio>
                </span>
                <form className='w-full' onSubmit={onSubmitHandler}>
                    <input onChange={handleOnChangeInput} autoComplete='off' maxLength={maxLength} autoFocus id='input' placeholder='_' className='relative w-full outline-0 bg-transparent border-none shadow-none resize-none overflow-hidden' />
                </form>
            </div>
        </div>
    )
}

export default Window