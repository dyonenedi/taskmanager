'use client';

import Link from 'next/link';

const editError = () => {
  return (
    <div className=''>
        <h1 className='text-2xl font-medium mx-auto text-center p-8 uppercase '>⚠ An error has occurred.</h1>
        <Link href='/' className='block mx-auto w-full text-center text-blue-500 underline'>⬅ Back to home</Link>
    </div>
  )
}

export default editError