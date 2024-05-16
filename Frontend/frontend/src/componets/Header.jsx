import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className=' w-full  bg-purple-500  py-5 px-4  flex justify-center max-lg:hidden '>
            <ul className='flex  flex-row gap-4  text-white font-semibold  '>
                <li className='cursor-pointer'><Link to={''}>Dashboard</Link> </li>
                <li className='cursor-pointer'> <Link to={'/alltodo'}>All ToDo</Link> </li>
                <li className='cursor-pointer'> <Link to={'/todocomplet'}> complete Todo</Link></li>
            </ul>

      </div>
      <Outlet/>
    </div>
  )
}

export default Header
