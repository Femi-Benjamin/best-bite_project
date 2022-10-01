import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
    return (
        <nav className=' bg-[#012044] h-[138px] w-screen'>
            <div className='md:px-[100px]'>
                <div className='flex justify-between items-center text-center'>

                    <h1 className='not-italic font-[800px] text-[48px] leading-[58px] text-[#EFB7B7] font-bold pt-[37px] sm:items-center sm:text-center sm:justify-center'>BEST BITE</h1>

                    <ul className='md:flex hidden justify-between items-center text-center gap-[79px] pt-[48px]'>

                        <Link to="/signup"><li className='not-italic font-[400px] text-[20px] leading-[24px] text-[#FFFFFF] font-semibold flex gap-1'>SIGN UP <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                        </li></Link>
                        <Link to="login"><li className='not-italic font-[400px] text-[20px] leasding-[24px] text-[#FFFFFF] font-semibold flex gap-1'>LOGIN <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                        </li></Link>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HomeNav