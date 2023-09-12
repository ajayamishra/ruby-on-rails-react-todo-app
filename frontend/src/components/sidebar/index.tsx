import { useState } from 'react'
import { IoCaretBackOutline } from 'react-icons/io5'
import { LuListTodo } from 'react-icons/lu'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <div className='flex'>
    <div className={`bg-dark-green h-screen p-5 pt-8 ${isOpen ? 'w-64' : 'w-20'} duration-300 relative`}>
        <IoCaretBackOutline
          className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border-2 border-dark-green cursor-pointer ${!isOpen && 'rotate-180'}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className='inline-flex'>
          <LuListTodo className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${isOpen && 'rotate-[360deg]'}`} />
          <h1 className={`text-white origin-left font-medium text-2xl durantion-300 ${!isOpen && 'scale-0'}`}>ToDo App</h1>
        </div>
      </div>
    </div>
  )
}