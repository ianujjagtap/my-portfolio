import React from 'react';
import Socials from './socials';


const header = () => {
    return (
        <div className='flex  top-0 h-screen  flex-col w-1/2 py-24 sticky justify-start gap-5 ml-24'>
            <header className='flex  w-1/2 h-screen flex-col top-0 ml-28'>

                <h2 className='text-5xl text-slate-300 font-segoeUI font-bold tracking-tight text-nowrap border-grey-600 '>Jagtap Anuj Kishor</h2>
                <h5 className='text-xl font-segoeUI font-medium tracking-tight mt-4'>Aspiring Frontend engineer</h5>
                <p className='text-16px text-slate-400 mt-4 leading-normal max-w-xs'>I build accessible, inclusive products and digital experiences for the web.</p>

                <ul className='mt-16 w-max'>
                    <li>
                        <a className='group flex items-center py-3 active' href="#about">
                            <span className='  nav-indicator mr-4 h-px transition-all   bg-slate-600 w-8  group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='text-xs font-bold uppercase tracking-widest text-slate-200 inline'>About</span>
                        </a>
                    </li>
                    <li>
                        <a className='group flex items-center py-3 active' href="#about">
                            <span className='  nav-indicator mr-4 h-px transition-all   bg-slate-600 w-8  group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='text-xs font-bold uppercase tracking-widest text-slate-200 inline'>Experiance</span>
                        </a>
                    </li>
                    <li>
                        <a className='group flex items-center py-3 active' href="#about">
                            <span className='  nav-indicator mr-4 h-px transition-all   bg-slate-600 w-8  group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='text-xs font-bold uppercase tracking-widest text-slate-200 inline'>Projects</span>
                        </a>
                    </li>
                </ul>

               <Socials/>
            </header>
        </div>
    )
}

export default header