import React from 'react'
import { useMenubar } from '@/context/contexts'
import {NavLink} from 'react-router-dom'

function Sidebar()
{
    const { menubarStatus } = useMenubar()

    return (
        <aside className={`fixed top-15 z-40 h-full py-2.5`}>
            <div className={`flex flex-col  ${menubarStatus ? 'ml-0 translate-x-0' : 'ml-2 -translate-x-100 sm:translate-x-0'}`}>
                <NavLink
                    className={({ isActive }) => `py-3.5 px-3.5 h-12 text-base sm:text-lg 
                        sm:font-semibold  flex items-center gap-10
                        ${isActive ? 'bg-[#FEEFC3] dark:bg-[#855e08]' : 'hover:bg-gray-100 dark:hover:bg-[#2c2b2b]'} 
                        ${menubarStatus ? 'rounded-r-full w-65 ' : 'w-12 rounded-full'}`
                    }
                    to="/"
                >
                    <span className={` ${menubarStatus ? 'pl-2' : 'pl-0'}`}>
                        <svg className="h-5 w-5 dark:text-white text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </span>
                    <span className={`${menubarStatus ? '' : 'hidden'}`}>Notes</span>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `py-2.5 px-3.5 h-12 text-base sm:text-lg sm:font-semibold 
                    flex items-center gap-10 
                        ${isActive ? 'bg-[#FEEFC3] dark:bg-[#855e08]' : 'hover:bg-gray-100 dark:hover:bg-[#2c2b2b]'}
                        ${menubarStatus ? 'rounded-r-4xl w-65' : 'w-12 rounded-full'}
                    `}
                    to="/archive"
                >
                    <span className={`${menubarStatus ? 'pl-2' : 'pl-0'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='dark:fill-gray-100 fill-black h-5 w-5 ' width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path>
                        </svg>
                    </span>
                    <span className={`${menubarStatus ? '' : 'hidden'}`}>Archive</span>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `py-2.5 px-3.5 h-12 text-base sm:text-lg sm:font-semibold 
                    flex items-center gap-10 
                        ${isActive ? 'bg-[#FEEFC3] dark:bg-[#855e08]' : 'hover:bg-gray-100 dark:hover:bg-[#2c2b2b]'}
                        ${menubarStatus ? 'rounded-r-4xl w-65' : 'w-12 rounded-full'}
                        `}
                    to="/trash"
                >
                    <span className={`${menubarStatus ? 'pl-2' : 'pl-0'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='dark:fill-gray-100 fill-black h-5 w-5 ' width="24" height="24" viewBox="0 0 24 24" >
                            <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
                            <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
                        </svg>
                    </span>
                    <span className={`${menubarStatus ? '' : 'hidden'}`}>Trash</span>
                </NavLink>
            </div>
        </aside>
    )
}

export default Sidebar