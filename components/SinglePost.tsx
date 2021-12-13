import Link from 'next/link'
import Head from 'next/head'

import { PostType } from '../constants'

const SinglePost = ({ post }: { post: PostType }) => {
  return (
    <>
      <article className='bg-white rounded shadow p-6 md:p-7 lg:p-9 min-h-screen'>
        {post.tags.map((tag, index) => (
          <Link href={`/tags/` + tag.tag}>
            <a
              className='font-bold text-red-500 px-1 py-1 uppercase'
              key={index}
            >
              {tag.tag}
            </a>
          </Link>
        ))}
        <h1 className='font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2'>
          {post.title}
        </h1>
        <div className='mt-4 mb-3 text-sm text-gray-700 flex items-center'>
          {post.author_profile ? (
            <img
              src={post.author_profile}
              className='rounded-full w-7 h-7 inline mr-2'
            />
          ) : (
            ''
          )}
          <a href='#' className='font-bold text-gray-600'>
            {post.author}
          </a>
          <span className='ml-3'>
            <i className='far fa-clock px-2'></i>
            {post.reading_time}
          </span>
        </div>
        <div className='prose prose-sm sm:prose lg:prose-lg mx-auto mt-4 md:mt-6'>
          <img src={post.image_field} alt={post.image_alt} />

          <p>{post.content}</p>

          {/* <blockquote className='relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote'>
              <p className='mb-4'>python manage.py runserver</p>
              <cite className='flex items-center'>
          <img
                  alt='Avatar of nickd'
                  className='w-12 mr-4 rounded-full bg-neutral-500'
                  src='...'
                />
          <div className='flex flex-col items-start'>
                  <span className='mb-1 text-sm italic font-bold'>
                    nickd fg thgth tuhtuhthnt;htthjth
                  </span>
                  <a
                    href='...'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm'
                  >
                    Draftgtjy i5y 5y6bu 6u6 u6u6u6u6u6 uu6
                  </a>
                </div>
              </cite>
            </blockquote> */}
        </div>
      </article>
    </>
  )
}

export default SinglePost
