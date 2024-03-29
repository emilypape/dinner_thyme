import { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import { Icon } from '@iconify/react';
import ProfileRecipes from './profileRecipes';
import EditProfile from './editProfile';
import Likes from './likes';
import Following from './following';
import { useRouter } from 'next/router';
import Loader from './loader';
import ProfilePictureModal from './ProfilePictureModal';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editProfModal, setEditProfModal] = useState(false);
  const [followerModal, setFollowerModal] = useState(false);
  const [likeList, setLikeList] = useState(false);
  const [profilePictureModal, setProfilePictureModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const router = useRouter();

  async function loggedInUser() {
    const response = await fetch('/api/loggedInUser');
    let userData = await response.json();

    setUser(userData);
    setProfilePicture(userData.profile_picture);
  }

  useEffect(() => {
    loggedInUser();
  }, []);

  return user ? (
    <>
      <div>
        <div className='p-10 flex flex-col lg:flex-row md:flex-row items-center justify-center xl:justify-start lg:justify-start md:justify-start lg:ml-60 md:ml-0'>
          <div>
            <Image
              className='rounded-full border-2 border-black'
              src={profilePicture || profilePicPlaceholder}
              width={150}
              height={150}
              alt=''
            />
          </div>
          <div className='mt-8 lg:mt-0 xl:mt-0 md:mt-0'>
            <div className='ml-8 xl:text-3xl lg:text-3xl md:text-2xl font-bold lg:ml-10 lg:mt-6 md:ml-10 md:mt-8 font-title'>
              {user.first_name}s Kitchen
            </div>

            <button
              onClick={() => setEditProfModal(true)}
              className=' py-2 px-10 text-white text-sm rounded-lg bg-green-500 xl:py-2 xl:px-6 md:py-2 md:px-6 lg:py-2 lg:px-6 mt-3 xl:text-lg lg:text-lg lg:ml-14 md:ml-10 b-2 b'>
              <div>Edit Profile</div>
            </button>
            <button onClick={() => router.push('/newRecipe')} className='flex ml-4 text-sm lg:ml-0 md-ml-0 delay-150 '>
              <Icon className='mt-4 lg:ml-16 md:ml-6' icon='bi:plus-square' color='gray' width={23} height={23} />
              <div className='text-gray-500 mt-4 ml-1 font-semibold'>New Recipe</div>
            </button>
          </div>
          <button
            onClick={() => setProfilePictureModal(true)}
            className='absolute mt-2 xl:mt-24 lg:mt-24 md:mt-24 rounded-full bg-white lg:-ml-2'>
            <Icon icon='akar-icons:circle-plus-fill' color='lime' width={50} height={50} />
          </button>
        </div>
        <div className='ml-10 mr-10 lg:ml-60 lg:mr-60 md:ml-60 md:mr-60 border-t border-black flex items-center justify-center'>
          <div
            onClick={() => router.push('/cookbooks')}
            className='hover:border-t-2 border-green-500 py-5 px-3 flex cursor-pointer'>
            <Icon icon='arcticons:nextcloudcookbook' color='gray' width={25} height={25} />
            <div className='text-xs text-gray-300 font-semibold px-1 pt-1'>COOKBOOKS</div>
          </div>
          {likeList ? (
            <div
              onClick={() => setLikeList(false)}
              className='hover:border-t-2 border-green-500 py-6 px-3 flex cursor-pointer'>
              <div className='flex'>
                <Icon icon='arcticons:recipe-keeper' color='gray' width={22} height={22} />
                <div className='text-xs text-gray-300 font-semibold px-1 pt-1'>RECIPES</div>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setLikeList(true)}
              className='hover:border-t-2 border-green-500 py-6 px-3 flex cursor-pointer'>
              <div className='flex'>
                <Icon icon='bi:heart' color='gray' width={20} height={20} />
                <div className='text-xs text-gray-300 font-semibold px-1 pt-1'>LIKES</div>
              </div>
            </div>
          )}

          <div
            onClick={() => setFollowerModal(true)}
            className='hover:border-t-2 border-green-500 py-6 px-3 flex cursor-pointer'>
            <Icon icon='ri:user-follow-line' color='gray' width={20} height={20} />
            <div className='text-xs text-gray-300 font-semibold px-1 pt-1'>FOLLOWING</div>
          </div>
        </div>
        {/* personal recipes */}
        <div>
          {editProfModal ? (
            <EditProfile setEditProfModal={setEditProfModal} setUser={setUser} editProfModal={editProfModal} />
          ) : null}
          {profilePictureModal ? (
            <ProfilePictureModal
              setProfilePictureModal={setProfilePictureModal}
              setProfilePicture={setProfilePicture}
            />
          ) : null}
          {followerModal && <Following setFollowerModal={setFollowerModal} followerModal={followerModal} />}
          {likeList ? <Likes /> : <ProfileRecipes />}
        </div>
      </div>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
}
