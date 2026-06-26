import Navbar from '@/components/navbar'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='h-[10000px] w-full'>
    {/* <div className='min-h-screen w-full'> */}
        <Navbar />
        {children}
    </div>
  )
}

export default layout