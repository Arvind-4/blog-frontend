import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'

import { base_url, PostType } from '../../constants'

import LoadingSpinner from '../../components/LoadingSpinner'
import PostList from '../../components/PostList'

interface Params extends ParsedUrlQuery {
  slug: string
}

const TagsList = ({ posts }: { posts: PostType[] }) => {
  const router = useRouter()
  const { slug } = router.query
  if (router.isFallback) {
    return <LoadingSpinner />
  } else {
    return (
      <>
        <p>
          You Filtered for{' '}
          <span className='uppercase text-red-500'>
            <strong>{slug}</strong>
          </span>
        </p>
        <PostList posts={posts} />
      </>
    )
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params! as Params
  const res = await fetch(`${base_url}/api/posts/tags/${params.slug}/`)
  const posts = await res.json()

  if (posts.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
    revalidate: 100,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default TagsList
