import React from 'react'

const Window = () => {
    const handleClickLinkGithub = () => {
        window.open('https://github.com/Saraiv/', '_blank')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.input.value)

        //TODO
    }

    return (
        <div className='shadow-lg shadow-black/20 w-full h-full bg-background-console rounded-b-lg text-white p-4 text-sm'>
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
            <div className='flex mt-10'>
                <span className='w-max'>
                    $PATH/saraivas-portfolio 
                </span>
                <form className='w-5/12' onSubmit={onSubmitHandler}>
                    <input autoFocus id='input' placeholder='_' className='relative w-full pl-2 outline-0 bg-transparent border-0 border-solid' />
                </form>
            </div>
        </div>
    )
}

export default Window