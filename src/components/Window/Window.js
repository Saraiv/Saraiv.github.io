import { React } from 'react'
import CommandLine from '../CommandLine/CommandLine'
import CV from '../../files/JoãoSaraivaCV.pdf'
import { 
    TerminalTitle,
    CopyRight,
    GithubPrompt,
    GithubLink,
    ContactMe,
    CVPrompt,
    HelpPrompt
} from '../Constants/TextConstants'

const Window = (props) => {
    const handleClickLinkGithub = () => {
        window.open('https://github.com/Saraiv/', '_blank')
    }
    
    setInterval(() => {
        let time = (new Date() - 907110000000) / (1000 * 60 * 60 * 24 * 365.25) //907110000000 30/09/1998
        document.querySelector('#myAge').innerHTML = time.toString().substring(0, 11)
    }, 200)

    return (
        <div className={ props.lightMode ? 'ease-out duration-1000 shadow-lg shadow-black/20 w-full h-full bg-slate-100 sm:rounded-b-lg text-background-console p-4 text-sm overflow-y-auto' : 'ease-out duration-1000 shadow-lg shadow-black/20 w-full h-full bg-background-console sm:rounded-b-lg text-white p-4 text-sm overflow-y-auto' } >
            <div className='grid grid-cols-2'>
                <strong>
                    {TerminalTitle}
                </strong>
                <div className='text-right text-esm'>
                    <span>João Saraiva </span>
                    <span id='myAge'></span>
                    <span> Years Old</span>
                </div>
                
            </div>
            <div className='grid grid-cols-1'>
                <span>
                    {CopyRight}
                </span>
            </div>
            <div className='grid grid-cols-1 mt-10'>
                <span>
                    {GithubPrompt} <span onClick={handleClickLinkGithub} className='hover:underline hover:underline-offset-1 cursor-pointer'>{GithubLink}</span>
                </span>
                <span>
                    {ContactMe}
                </span>
                <span>
                    {CVPrompt} <a className='hover:underline hover:underline-offset-1 cursor-pointer' href={CV} download={CV}>here</a>
                </span>
                <span>
                    {HelpPrompt}
                </span>
            </div>
            <div className='grid grid-cols-1 mt-10'>
                <CommandLine setLightMode={props.setLightMode} lightMode={props.lightMode} />
            </div>
        </div>
    )
}

export default Window