import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <center>
      <div className='bgimg w-screen h-screen pt-[100px]'>
        <div className='box w-[582px] h-[667px] backdrop-blur-2xl rounded-[11px]'>
          <h1 className='not-italic font-[400px] text-[64px] leading-[74px] text-white pt-[90px]'>Login</h1>


          <form>
            <input className='w-[417px] h-[86px] mt-6 items-center text-center not-italic font-[400px] text-[16px] leading-[18px] border-2 bg-transparent' type="email" id='email' placeholder='user name/email or number' />

            <input className='w-[417px] h-[86px] mt-6 items-center text-center not-italic font-[400px] text-[16px] leading-[18px] border-2 bg-transparent mb-[28px]' type="password" id='password' placeholder='password' />

            <button className='bg-[#001B25] w-[417px] h-[59px] not-italic font-[400px] text-[20px] leading-[23px] text-white mb-[20px]'>Login</button>

            <div className='flex items-center justify-center text-center gap-5'>
                <button className='w-[199px] h-[53px] bg-[#577DBC] not-italic font-[400px] text-[20px] leading-[23px] text-white'>Facebook</button>

                <button className='w-[199px] h-[53px] bg-[#000000] not-italic font-[400px] text-[20px] leading-[23px] text-white'>Github</button>
            </div>

            
          </form>
        </div>
      </div>
    </center>
  )
}

export default Login