import Link from 'next/link'
import Image from 'next/image'
import CustomHeader from '@src/components/custom-header'

export default function Sidebar() {
  return (
    <div>
      <CustomHeader />
      <aside className='md:block h-full'>
        <div className='sticky h-screen top-0 py-20 flex flex-wrap content-center'>
          <div className='w-full content-center text-center'>
            <Link href='/'>
              <Image
                className='text-center w-32 md:w-36'
                src='/asserts/logo.png'
                alt='logo'
                width={144}
                height={144}
              />
            </Link>
          </div>
          <div>
            <ul className='w-full mt-10'>
              <li className='mb-5'>
                <Link
                  href='/'
                  className='block rounded px-4 py-2.5 transition duration-200 hover:bg-gray-400'
                >
                  Home
                </Link>
              </li>
              {/* <li className='mb-5'>
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
                </li> */}
            </ul>
          </div>
          <div className='w-full mt-10 text-center'>
            <ul>
              <li className='inline-block mr-2 p-1'>
                <Link
                  href='https://www.instagram.com/_arvind.a_/'
                  target='_blank'
                >
                  <i className='text-white fab fa-instagram fa-2x'></i>
                </Link>
              </li>
              {/* <li className='inline-block mr-2 p-1'>
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
                </li> */}
            </ul>
            <p className='text-gray-300 mt-5'>
              All Rights Reserved. Arvind 2021
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
