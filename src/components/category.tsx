import React from 'react'

const Category = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className='rounded-full text-xs text-primary bg-secondary border py-1 min-w-[4rem] hover:bg-gray-400/20 transition'
      {...props}
    >
      {children}
    </button>
  )
}

export default Category
