import React from 'react'

const layout = ({children}: { children: React.ReactNode}) => {
  return (
    <div>
      <h2 className='text-2xl'>ROOT LAYOUT</h2>
      {children}
    </div>
  )
}

export default layout