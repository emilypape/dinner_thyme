import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupForm({ setLogin }) {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  const router = useRouter();

  // grab input for signup and assign it to a state value
  const handleChange = (e, setter) => {
    console.log(e);
    setter(e.target.value);
  };

  async function signup(e) {
    e.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'post',
      body: JSON.stringify({
        username: username,
        first_name: name,
        email: email,
        hashed_password: password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const loginResponse = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify({
          username: username,
          hashed_password: password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (loginResponse.ok) {
        router.push('/profile');
      } else {
        alert(loginResponse.statusText);
      }
    } else {
      alert(response.statusText);
    }
  }

  return (
    <form className='flex flex-col items-center' onSubmit={signup}>
      <div className='mb-3 text-lg opacity-70 md:text-2xl'>Create an account</div>
      <div>
        <input
          onChange={(e) => handleChange(e, setName)}
          placeholder='Name'
          className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80'
        />
        <input
          onChange={(e) => handleChange(e, setEmail)}
          placeholder='Email'
          type='text'
          className='rounded-full  px-2 py-2 mb-2 text-black max-w-lg opacity-80'
        />
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e, setUsername)}
          placeholder='Username'
          className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80'
        />
        <input
          onChange={(e) => handleChange(e, setPassword)}
          placeholder='Password'
          type='password'
          className='rounded-full mr-2  px-2 py-2 mb-2 text-black max-w-lg opacity-80'
        />
      </div>
      <div>
        <button
          type='submit'
          className='inline-block px-20 py-2 border-2 border-black text-black-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-4'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'>
          Sign up
        </button>
        <div className='flex items-center my-4 before:flex-1 before:border-t before:border-black before:mt-0.5 after:flex-1 after:border-t after:border-black after:mt-0.5'>
          <p className='text-center text-sm font-bold mx-2 mb-0'>OR</p>
        </div>
        <div className='px-20 underline text-blue-600 cursor-pointer' onClick={() => setLogin(true)}>
          Login
        </div>
      </div>
    </form>
  );
}
