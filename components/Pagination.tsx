import Link from 'next/link'

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}: {
  postsPerPage: number
  totalPosts: number
  currentPage: number
  paginate: Function
}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const last: number = pageNumbers.slice(-1)[0]
  const first: number = pageNumbers[0]

  return (
    <>
      <div className='grid grid-cols-12 gap-0 mt-4 md:mt-5'>
        <div className='col-span-6 text-right pr-4'>
          {currentPage !== first ? (
            <Link href={''}>
              <a
                onClick={() => paginate(currentPage - 1)}
                className='font-bold text-gray-700 hover:text-red-500 text-base md:text-lg'
              >
                <i className='fas fa-arrow-circle-left'></i> Previous Post
              </a>
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className='col-span-6 text-left pl-4'>
          {currentPage !== last ? (
            <Link href={''}>
              <a
                onClick={() => paginate(currentPage + 1)}
                className='font-bold text-gray-700 hover:text-red-500 text-base md:text-lg'
              >
                Next Post <i className='fas fa-arrow-circle-right'></i>
              </a>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
      <p className='font-bold text-gray-700 hover:text-red-500 text-center p-2'>
        {currentPage} of {last}
      </p>
    </>
  )
}

export default Pagination
