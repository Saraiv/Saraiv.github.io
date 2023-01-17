import { React, useEffect, useState } from 'react'
import { 
    OldBank, 
    WePlaySports, 
    AllDayClinic, 
    AboutMe,
    HackMe,
    Help,
    LightMode,
    DarkMode,
    Experience,
    Amarinfo,
    Empis,
    Verdecenter,
    Waveform
} from '../Constants/TextConstants'
import {
    getTime
} from '../Helpers/Helpers'

const Window = (props) => {
    const [windSize, setWindowSize] = useState(1920)
    const [maxLength, setMaxLength] = useState(0)
    let projectsArray = [], experienceArray = []
    projectsArray.push(OldBank, WePlaySports, AllDayClinic)
    experienceArray.push(Experience, Amarinfo, Empis, Verdecenter, Waveform)

    const [command, setCommand] = useState([])

    //TODO REMEMBER LAST COMMANDS HISTORY OF COMMANDS

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const [hours, minutes, seconds] = getTime()
        
        switch(e.target.input.value.toLowerCase()){
            case 'light-mode':
                props.setLightMode(true)
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + LightMode])
                document.getElementById('input').value = ''
                break
            case 'dark-mode':
                props.setLightMode(false)
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + DarkMode])
                document.getElementById('input').value = ''
                break
            case 'clear':
                setCommand([])
                document.getElementById('input').value = ''
                break
            case 'help':
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + Help])
                document.getElementById('input').value = ''
                break
            case 'projects':
                //TODO WITH ENTERS SEPARATING SENTENCES
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + projectsArray])
                document.getElementById('input').value = ''
                break
            case 'about-me':
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- ' 
                                        + AboutMe])
                document.getElementById('input').value = ''
                break
            case 'experience':
                //TODO WITH ENTERS SEPARATING SENTENCES
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + experienceArray])
                document.getElementById('input').value = ''
                break
            case 'hobbies':
                //TODO
                document.getElementById('input').value = ''
                break
            default:
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- ' 
                                        + HackMe])
                document.getElementById('input').value = ''
                break
        }
    }
    
    const handleOnChangeInput = () => {
        setWindowSize(window.innerWidth)       
    }

    useEffect (() => {
        if(windSize <= 1920 && windSize >= 1024) setMaxLength(80)
        else if(windSize < 1024 && windSize >= 640) setMaxLength(60)
        else if(windSize < 640) setMaxLength(50)
    }, [windSize])

    return (
        <div>
            <div>
                {
                    command.map(item => {
                        return (
                            <li key={item} className='block'>
                                <div>
                                    {item}
                                </div>
                                <br />
                            </li>
                        )
                    })
                }
            </div>
            <div className='flex w-full'>
                <span className='w-auto'>
                    $PATH/saraivas-portfolio-
                </span>
                <form className='w-auto grow' onSubmit={onSubmitHandler}>
                    <input 
                        onChange={handleOnChangeInput} 
                        autoComplete='off'
                        maxLength={maxLength} 
                        autoFocus 
                        id='input' 
                        placeholder='_' 
                        className='relative w-full outline-0 bg-transparent border-none shadow-none resize-none overflow-hidden' />
                </form>
            </div>
        </div>
    )
}

export default Window