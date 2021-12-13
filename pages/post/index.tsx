import { GetStaticProps } from 'next'
import { useState } from 'react'

import { base_url, PostType, number_of_posts_per_page } from '../../constants'

import Pagination from '../../components/Pagination'
import PostList from '../../components/PostList'

const PostPage = ({ posts }: { posts: PostType[] }) => {
  const NumberOfPostsPerPage: number = number_of_posts_per_page
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(NumberOfPostsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

  console.log('The Current Posts are ', currentPosts)
  console.log('The number of Posts ', number_of_posts_per_page)

  return (
    <>
      <div className='min-h-screen'>
        <PostList posts={currentPosts} />
      </div>
      {posts.length > NumberOfPostsPerPage ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      ) : (
        ''
      )}
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

export default PostPage
