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
    Waveform,
    Hobbies
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
    const [history, addHistory] = useState([])
    const [countHistory, setCountHistory] = useState(0)

    //TODO REMEMBER LAST COMMANDS HISTORY OF COMMANDS

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addHistory([...history, e.target.input.value])
        const [hours, minutes, seconds] = getTime()
        
        switch(e.target.input.value.toLowerCase()){
            case 'light-mode':
                if(!props.lightMode){
                    props.setLightMode(true)
                    setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + LightMode])
                }
                else{
                    props.setLightMode(false)
                    setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + DarkMode])
                }
                document.getElementById('input').value = ''
                break
            case 'dark-mode':
                if(props.lightMode){
                    props.setLightMode(false)
                    setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + DarkMode])
                }
                else{
                    props.setLightMode(true)
                    setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + LightMode])
                }
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
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- '
                                        + experienceArray])
                document.getElementById('input').value = ''
                break
            case 'hobbies':
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- ' 
                                        + Hobbies])
                document.getElementById('input').value = ''
                break
            default:
                setCommand([...command, hours + ':' + minutes + ':' + seconds + '- ' 
                                        + HackMe])
                document.getElementById('input').value = ''
                break
        }
    }

    const handleOnKeyDownInput = (e) => {
        if (e.keyCode === 38 && history.length >= 0){
            if(countHistory < history.length && countHistory >= 0){
                setCountHistory(countHistory + 1)
                e.target.value = history[countHistory]
            }
        } else if (e.keyCode === 40 && history.length >= 0){
            if(countHistory >= 0){
                setCountHistory(countHistory - 1)
                e.target.value = history[countHistory]
            }
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
                            <li className={item ? 'block last:pb-10' : 'block'}  key={item}>
                                <div>
                                    {
                                        item.split('\n').map(element => {
                                            return <div key={element}>{element.replace(',','')}</div>
                                        })
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </div>
            <div className='grid grid-cols-1 sm:flex sm:w-full'>
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
                        onKeyDown={handleOnKeyDownInput}
                        placeholder='_' 
                        className='relative w-full outline-0 bg-transparent border-none shadow-none resize-none overflow-hidden' />
                </form>
            </div>
        </div>
    )
}

export default Window