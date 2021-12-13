import { GetStaticProps } from 'next'
import Link from 'next/link'

import { base_url, TagType } from '../../constants'

const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <>
      <div className='bg-white w-full'>
        <div className='px-5 py-1'>
          <h3 className='font-bold text-xs'>TAGS</h3>

          <div className='my-2 flex flex-wrap'>
            {tags.map((tag: TagType) => (
              <Link href={`/tags/${tag.tag}`}>
                <a>
                  <span className='m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer uppercase'>
                    #{tag.tag}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${base_url}/api/posts/tags/lists/`)
  const tags: TagType[] = await res.json()
  return {
    props: {
      tags,
    },
    revalidate: 100,
  }
}

export default Tags
