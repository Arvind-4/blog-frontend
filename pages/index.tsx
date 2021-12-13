import { GetStaticProps } from 'next'
import Link from 'next/link'

import PostList from '../components/PostList'

import { base_url } from '../constants'
import { PostType } from '../constants'

const Home = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      <div className='min-h-screen'>
        <PostList posts={posts} />
      </div>
      <div className='text-center mt-4 md:mt-5'>
        <Link href={'/post/'}>
          <a className='inline-block text-white bg-red-500 hover:bg-red-600 rounded font-bold py-3 px-7'>
            Load more
          </a>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${base_url}/api/posts/list-view/`)
  const posts: PostType[] = await res.json()
  return {
    props: {
      posts,
    },
    revalidate: 100,
  }
}

export default Home
