import { useState } from 'react';
import Image from 'next/image';
import profile_picture_one from '../public/assets/images/prof_pic_1.jpeg';
import profile_picture_two from '../public/assets/images/prof_pic_2.webp';
import profile_picture_three from '../public/assets/images/prof_pic_3.jpeg';
import profile_picture_four from '../public/assets/images/prof_pic_4.jpeg';
import profile_picture_five from '../public/assets/images/prof_pic_5.jpeg';
import profile_picture_six from '../public/assets/images/prof_pic_6.jpeg';

export default function ProfilePictureModal({ setProfilePictureModal }) {
  const [isSelected, setIsSelected] = useState('');

  function handleImageSelection(value) {
    setIsSelected(value);
    console.log(value);
  }
  return (
    <>
      <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm lg:max-w-xl md:max-w-xl xl:max-w-xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>Select a Profile Photo</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setProfilePictureModal(false)}>
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='flex-wrap flex justify-evenly'>
                <div
                  onClick={() => handleImageSelection('prof_pic_1')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_1' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_one} height={150} width={150} />
                </div>
                <div
                  onClick={() => handleImageSelection('prof_pic_2')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_2' ? 'border-4 border-green-500' : ''}`}
                  value='prof_pic_2'>
                  <Image src={profile_picture_two} height={150} width={150} />
                </div>
                <div
                  onClick={() => handleImageSelection('prof_pic_3')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_3' ? 'border-4 border-green-500' : ''}`}
                  value='prof_pic_3'>
                  <Image src={profile_picture_three} height={150} width={150} />
                </div>
                <div
                  onClick={() => handleImageSelection('prof_pic_4')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_4' ? 'border-4 border-green-500' : ''}`}
                  value='prof_pic_4'>
                  <Image src={profile_picture_four} height={150} width={150} />
                </div>
                <div
                  onClick={() => handleImageSelection('prof_pic_5')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_5' ? 'border-4 border-green-500' : ''}`}
                  value='prof_pic_5'>
                  <Image src={profile_picture_five} height={150} width={150} />
                </div>
                <div
                  onClick={() => handleImageSelection('prof_pic_6')}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_6' ? 'border-4 border-green-500' : ''}`}
                  value='prof_pic_6'>
                  <Image src={profile_picture_six} height={150} width={150} />
                </div>{' '}
              </div>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => setProfilePictureModal(false)}>
                exit
              </button>
              <button
                className='bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                // onClick={() => setEditProfModal(false)}
              >
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
