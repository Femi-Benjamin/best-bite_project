import React from 'react'
import "./Home.css"
import HomeNav from '../navBar/HomeNav'

const Home = () => {
    return (
        <div className='bg w-screen h-[970px]'>
            <HomeNav />
            <div className='md:px-[100px]'>
                <div className='flex justify-between'>
                    <div className=' pt-[198px]'>

                        <h1 className='not-italic font-[700px] text-[40px] leading-[48px] text-white font-bold mb-[20px]'>“ PEOPLE WHO GIVE YOU <br /> FOOD ARE GIVING YOU <br /> THEIR HEART”</h1>

                        <p className='not-italic font-[200px] text-[20px] leading-[24px] text-white mb-[34px]'>Welcome to the number one food restaurant in Curpos Christi <br /> from continental to traditional dishes</p>

                        <button className=' w-[134px] h-[29px] rounded-[19px] bg-[#1F75F6] not-italic font-[700px] text-[16px] leading-[19px] text-white'>Explore</button>
                    </div>

                    <div>
                        <img className='pt-[114px] mb-[81px] pr-9 sm:block' src="/hero 2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-screen h-[164px] bg-[#012044]'>
                <div className='md:px-[100px]'>
                    <div className=' flex justify-between'>
                        <h1 className='not-italic font-[700px] text-[36px] leading-[44px] text-white pt-[43px] font-bold'>WE UNDERSTAND YOUR NEEDS ON WELDING/ <br /> CONSTRUCTION</h1>

                        <div className='pt-[49px]'>
                            <button className='w-[331px] h-[83px] rounded-[10px] bg-[#0C7CFF] not-italic font-[700px] text-[40px] leading-[48px] text-white font-bold'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-screen h-[631px] bg-white'>
                <div className=' flex'>
                    <div className='m-[68px]'>
                        <h1 className='not-italic font-[800px] text-[48px] leading-[58px] underline font-bold pb-3'>ABOUT US</h1>
                        <p className='not-italic font-[400px] text-[24px] leading-[29px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            cillum dolore eu fugiat nulla
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <img className='w-[377px] h-[283px] mt-[100px]' src="/1.png" alt="" />
                    <img className='w-[422px] h-[283px] mt-[100px] mr-[68px]' src="/istockphoto-1129661826-612x612.png" alt="" />
                </div>
                <div className='justify-center items-center text-center m-[17px]'>
                    <button className='w-[237px] h-[41px] bg-[#012044] rounded-[35px] not-italic font-[300px] text-[24px] leading-[29px] text-white'>BOOK A SEAT</button>
                </div>
            </div>
        </div>
    )
}

export default Home