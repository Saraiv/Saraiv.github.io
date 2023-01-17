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

    return (
        <div className={ props.lightMode ? 'ease-out duration-1000 shadow-lg shadow-black/20 w-full h-full bg-slate-100 sm:rounded-b-lg text-background-console p-4 text-sm overflow-hidden' : 'ease-out duration-1000 shadow-lg shadow-black/20 w-full h-full bg-background-console sm:rounded-b-lg text-white p-4 text-sm overflow-hidden' } >
            <div className='grid grid-cols-1'>
                <strong>
                    {TerminalTitle}
                </strong>
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