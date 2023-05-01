import { useState } from 'react';
import Image from 'next/image';
import profile_picture_one from '../public/assets/images/prof_pic_1.jpeg';
import profile_picture_two from '../public/assets/images/prof_pic_2.webp';
import profile_picture_three from '../public/assets/images/prof_pic_3.jpeg';
import profile_picture_four from '../public/assets/images/prof_pic_4.jpeg';
import profile_picture_five from '../public/assets/images/prof_pic_5.jpeg';
import profile_picture_six from '../public/assets/images/prof_pic_6.jpeg';
import profile_picture_seven from '../public/assets/images/prof_pic_7.jpeg';
import profile_picture_eight from '../public/assets/images/prof_pic_8.jpeg';
import profile_picture_nine from '../public/assets/images/prof_pic_9.jpeg';
import profile_picture_ten from '../public/assets/images/prof_pic_10.jpeg';
import profile_picture_eleven from '../public/assets/images/prof_pic_11.webp';
import profile_picture_twelve from '../public/assets/images/prof_pic_12.jpeg';
import profile_picture_thirteen from '../public/assets/images/prof_pic_13.jpeg';
import profile_picture_fourteen from '../public/assets/images/prof_pic_14.jpeg';
import profile_picture_fifteen from '../public/assets/images/prof_pic_15.webp';

export default function ProfilePictureModal({ setProfilePictureModal, setProfilePicture }) {
  const [isSelected, setIsSelected] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  async function handleProfilePictureChange() {
    const response = await fetch(`/api/updateProfilePicture`, {
      method: 'put',
      body: JSON.stringify({
        profile_picture: selectedImage,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      alert(response.statusText);
    } else {
      setProfilePicture(selectedImage);
      setProfilePictureModal(false);
    }
  }

  function handleImageSelection(value, e) {
    setIsSelected(value);
    setSelectedImage(`/${e.target.src.match(/_next.+/)[0]}`);
    console.log(e);
  }
  console.log(selectedImage);
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
            <div className='relative p-6 flex-auto overflow-y-scroll max-h-[25em]'>
              <div className='flex-wrap flex justify-evenly'>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_1', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_1' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_one} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_2', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_2' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_two} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_3', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_3' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_three} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_4', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_4' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_four} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_5', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_5' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_five} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_6', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_6' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_six} height={150} width={150} />
                </div>{' '}
                <div
                  onClick={(e) => handleImageSelection('prof_pic_7', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_7' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_seven} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_8', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_8' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_eight} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_9', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_9' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_nine} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_10', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_10' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_ten} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_11', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_11' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_eleven} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_12', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_12' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_twelve} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_13', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_13' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_thirteen} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_14', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_14' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_fourteen} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('prof_pic_15', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'prof_pic_15' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={profile_picture_fifteen} height={150} width={150} />
                </div>
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
                onClick={handleProfilePictureChange}>
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
