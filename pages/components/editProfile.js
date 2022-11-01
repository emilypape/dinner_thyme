import { useState, useEffect } from 'react';

export default function EditProfile({ setEditProfModal }) {
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm lg:max-w-xl md:max-w-xl xl:max-w-xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>Edit Profile</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setEditProfModal(false)}>
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='my-4 text-slate-500 text-lg leading-relaxed'>
                <form className='text-sm'>
                  <div className='flex  mb-3'>
                    <div className='mr-1'>
                      <div className='text-black'>First Name</div>
                      <input className='border-2 rounded-lg py-1 px-1 ' placeholder='first name' />
                    </div>
                    <div>
                      <div className='text-black'>Last Name</div>
                      <input className='border-2 rounded-lg py-1 px-1' placeholder='last name' />
                    </div>
                  </div>
                  <div className='flex mb-2'>
                    <div className='mr-1'>
                      <div className='text-black'>Username</div>
                      <input className='border-2 rounded-lg py-1 px-1' placeholder='username' />
                    </div>
                    <div>
                      <div className='text-black'>Password</div>
                      <input className='border-2 rounded-lg py-1 px-1' placeholder='password' type='password' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setEditProfModal(false)}>
                exit
              </button>
              <button
                className='bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setEditProfModal(false)}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
