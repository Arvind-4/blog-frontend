import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/router'

import { base_url, PostType } from '../../constants'

import SinglePost from '../../components/SinglePost'
import LoadingSpinner from '../../components/LoadingSpinner'

interface Params extends ParsedUrlQuery {
  slug: string
}

const SinglePostPage = ({ post }: { post: PostType }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <LoadingSpinner />
  } else {
    return <SinglePost post={post} />
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params! as Params
  const res = await fetch(`${base_url}/api/posts/${params.slug}/detail-view/`)

  const post = await res.json()

  if (Object.keys(post).length === 1) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
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

export default SinglePostPage
