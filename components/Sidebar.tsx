import type { NextPage } from 'next'
import Link from 'next/link'

import { useState } from 'react'

const Sidebar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <nav className='md:hidden bg-white px-4 py-4'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-6'>
            <Link href='/'>
              <a className='inline-block align-middle'>
                <img className='w-10' src='/asserts/logo.png' />
              </a>
            </Link>
          </div>
          <div className='col-span-6'>
            <div className='absolute right-0 inset-y-4 w-10 h-10 bg-white'>
              <a
                className='inline-block align-middle'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <i className='w-10 h-10 fas fa-bars'></i>
                ) : (
                  <i className='absolute right-0 inset-y-1 w-10 h-10 bg-white fas fa-times'></i>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className='col-span-12 md:col-span-4 lg:col-span-3'>
        <aside
          className={
            isOpen
              ? 'hidden md:block bg-gray-900 h-full px-10'
              : 'md:block bg-gray-900 h-full px-10'
          }
        >
          <div className='sticky h-screen top-0 py-20 flex flex-wrap content-center'>
            <div className='w-full content-center text-center'>
              <Link href='/'>
                <a>
                  <img
                    className='text-center w-32 md:w-36'
                    src='/asserts/logo.png'
                  />
                </a>
              </Link>
            </div>
            <div>
              <ul className='w-full mt-10'>
                <li className='mb-5'>
                  <Link href='/'>
                    <a className='text-gray-300 hover:text-white'>Home</a>
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link href='/post/'>
                    <a className='text-gray-300 hover:text-white'>Posts</a>
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link href='/tags/'>
                    <a className='text-gray-300 hover:text-white'>Tags</a>
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link href='/about-us/'>
                    <a className='text-gray-300 hover:text-white'>About</a>
                  </Link>
                </li>
                <li className='mb-5'>
                  <Link href='/contact-us/'>
                    <a className='text-gray-300 hover:text-white'>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='w-full mt-10 text-center'>
              <ul>
                <li className='inline-block mr-2 p-1'>
                  <Link href='https://www.instagram.com/_arvind.a_/'>
                    <a target='_blank'>
                      <i className='text-white fab fa-instagram fa-2x'></i>
                    </a>
                  </Link>
                </li>
                <li className='inline-block mr-2 p-1'>
                  <Link href='https://github.com/Arvind-4'>
                    <a target='_blank'>
                      <i className='text-white fab fa-github fa-2x'></i>
                    </a>
                  </Link>
                </li>
                <li className='inline-block mr-2 p-1'>
                  <Link href='https://twitter.com/Arvind423207283'>
                    <a target='_blank'>
                      <i className='text-white fab fa-twitter fa-2x'></i>
                    </a>
                  </Link>
                </li>
                <li className='inline-block mr-2 p-1'>
                  <Link href='https://www.linkedin.com/in/arvind-a-840b48211/'>
                    <a target='_blank'>
                      <i className='text-white fab fa-linkedin fa-2x'></i>
                    </a>
                  </Link>
                </li>
                <li className='inline-block mr-2 p-1'>
                  <Link href='http://arvind11.ml/'>
                    <a target='_blank'>
                      <i className='text-white fas fa-globe fa-2x'></i>
                    </a>
                  </Link>
                </li>
              </ul>
              <p className='text-gray-300 mt-5'>
                All Rights Reserved. Arvind 2021
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Sidebar
