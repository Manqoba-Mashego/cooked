import Navbar from '@/components/navbar'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='w-full'>
        <Navbar />
        {children}
    </div>
  )
}

export default layout