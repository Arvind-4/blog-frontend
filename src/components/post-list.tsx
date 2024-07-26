import Link from 'next/link'

import { PostType } from '@src/config'
import Image from 'next/image'

const PostList = ({ posts }: { posts: Array<PostType> }) => {
  return (
    <>
      {posts.map((post: PostType, index: number) => (
        <div className='bg-white rounded shadow' key={index}>
          <div className='p-6 md:p-7 lg:p-9' key={index}>
            {post.tags.map((tag: any, index: number) => (
              <Link
                href={`/tags/${tag.tag}/`}
                className='font-bold text-red-500 px-1 py-1 uppercase'
                key={index}
              >
                {tag.tag}
              </Link>
            ))}
            <h3 className='font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2'>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <div className='mt-3 mb-3 text-sm text-gray-700 flex items-center'>
              {post.author_profile ? (
                <Image
                  src={post.author_profile}
                  className='rounded-full w-7 h-7 inline mr-2'
                  alt={post.author}
                  width={28}
                  height={28}
                />
              ) : null}
              <a href='#' className='font-bold text-gray-600'>
                {post.author}
              </a>
              <span className='ml-3'>
                <i className='far fa-clock px-2'></i>
                {post.reading_time}
              </span>
            </div>
            <div className='text-base md:text-lg text-gray-500'>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <p className='leading-7 lg:leading-8'>
                    {post.short_summary}...
                  </p>
                </a>
              </Link>
            </div>
            <Link
              href={`/post/${post.slug}`}
              className='mt-4 inline-block font-bold text-red-500'
            >
              Read more...
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostList
