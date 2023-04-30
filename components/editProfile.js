import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import useUser from '../utils/useUser';

export default function EditProfile({ setEditProfModal, setUser }) {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [username, setUsername] = useState('');

  const router = useRouter();
  const { user } = useUser();

  // grab input for signup and assign it to a state value
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handlelastName = (event) => {
    setLastName(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  async function updateProfile() {
    const response = await fetch('/api/editProfile', {
      method: 'put',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      alert(response.statusText);
    } else {
      const user = await response.json();
      setUser(user);
    }
  }

  function saveChanges() {
    updateProfile();
    setEditProfModal(false);
  }

  useEffect(() => {
    console.log(user);
    const { first_name, last_name, username } = user;
    setFirstName(first_name);
    setLastName(last_name);
    setUsername(username);
  }, [user]);

  return (
    <>
      <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none'>
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
                      <input
                        onChange={handleFirstName}
                        className='border-2 rounded-lg py-1 px-1 '
                        placeholder='first name'
                        value={firstName}
                      />
                    </div>
                    <div>
                      <div className='text-black'>Last Name</div>
                      <input
                        onChange={handlelastName}
                        className='border-2 rounded-lg py-1 px-1'
                        placeholder='last name'
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className='flex mb-2'>
                    <div className='mr-1'>
                      <div className='text-black'>Username</div>
                      <input
                        onChange={handleUsername}
                        className='border-2 rounded-lg py-1 px-1'
                        placeholder='username'
                        value={username}
                      />
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
                // onClick={() => setEditProfModal(false)}
                onClick={saveChanges}>
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
