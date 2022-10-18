import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div classname=''>
      <nav className='bg-white-800 lg:ml-44 lg:mr-44 lg:p-2  lg:border-b lg:border-black'>
        <div className='max-w-7xl  px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <div className='flex '>
                  <Icon icon='tabler:chef-hat' width='46' height='46' />
                  <div className='font-bold text-3xl mt-3 ml-1 font-title  text-black'>Dinner Thyme</div>
                </div>
              </div>
              <div className='hidden md:block mt-5'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a
                    href='#'
                    className=' hover:bg-green-500 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Feed
                  </a>

                  <a
                    href='#'
                    className='text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Profile
                  </a>

                  <a
                    href='#'
                    className='text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Cookbooks
                  </a>

                  <a
                    href='#'
                    className='text-gray-300 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-500 hover:bg-white-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-400 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='bg-white-900 block h-8 w-8 mt-2'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Feed
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Profile
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Cookbooks
                </a>

                <a
                  href='#'
                  className='text-gray-300 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Logout
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
