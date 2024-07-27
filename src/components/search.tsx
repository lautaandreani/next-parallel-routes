'use client'
import { Input } from '@/components/ui/input'

interface SearchProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Search = ({ defaultValue, ...props }: SearchProps) => {
  return (
    <form className='w-full flex gap-1 items-center' {...props}>
      <Input type='text' placeholder='Search photos and illustrations' name='search' autoFocus />
    </form>
  )
}

export default Search
