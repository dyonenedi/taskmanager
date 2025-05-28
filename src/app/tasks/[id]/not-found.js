'use client';

import Link from 'next/link'

const notFound = () => {
  return (
    <div className=''>
        <h1 className='text-2xl font-medium mx-auto text-center p-8 uppercase '>⚠ Page not found</h1>
        <Link href='/' className='block mx-auto w-full text-center text-blue-500 underline'>⬅ Back to home</Link>
    </div>
  )
}

export default notFound