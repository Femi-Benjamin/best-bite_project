import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <center>
      <div className='bggimg w-screen h-screen pt-[100px] bg-no-repeat bg-cover'>
        <div className='boxx w-[582px] h-[667px] backdrop-blur-2xl rounded-[11px]'>

          <h1 className='not-italic font-[400px] text-[64px] leading-[74px] text-white font-semibold pt-[80px]'>SIGN UP</h1>

          <form>
            <input className='w-[417px] h-[86px] mt-6 items-center text-center not-italic font-[400px] text-[16px] leading-[18px] border-2 bg-transparent' type="email" id='email' placeholder='enter email or number' />

            <input className='w-[417px] h-[86px] mt-6 items-center text-center not-italic font-[400px] text-[16px] leading-[18px] border-2 bg-transparent mb-[30px]' type="password" id='password' placeholder='email password' />

            <button className='w-[199px] h-[53px] bg-[#0f0b54] hover:bg-[#577DBC] not-italic font-[400px] text-[20px] leading-[23px] text-white rounded-md font-semibold mb-10'>SUBMIT</button>

            <div className='items-start text-left ml-[81px] mb-[16px]'>
              <input type="radio" />
              <label className='text-white' htmlFor="">Remember me</label>
            </div>
          </form>

          <div className='text-white items-start text-left ml-[81px]'>
            <h1 className='not-italic font-[400px] text-[15px] leading-[17px] mb-[7px]'>NOTICE</h1>
            <p className='not-italic font-[400px] text-[12px] leading-[12px]'>Only Admin / Staffs of this company can login to the dashboard</p>
          </div>

        </div>
      </div>
    </center>
  )
}

export default Signup