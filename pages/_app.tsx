import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import Sidebar from '../components/Sidebar'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='xl:container mx-auto'>
        <div className='grid grid-cols-12 gap-0'>
          <Sidebar />
          <div className='col-span-12 md:col-span-8 lg:col-span-9'>
            <main className='p-4 md:p-5'>
              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
