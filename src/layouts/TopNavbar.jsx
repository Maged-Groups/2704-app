import { Link } from 'react-router'
import topNavLinks from '../lib/topNavLinks';
import { RiLogoutBoxLine } from "react-icons/ri";
import { TbFaceId } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";

import { useSelector } from 'react-redux';

console.log('TopNavbar.jsx file');

const TopNavbar = () => {
  console.log('TopNavbar Component rendered');




  const { user, token, isLoggedin } = useSelector(store => { return store.userReducer });




  return (
    <nav className='flex flex-col sticky top-0 z-50'>

      <div className='bg-yellow-300 text-sky-950 flex justify-end px-3 py-1 gap-4'>

        {/* ICONS */}
        <div>
          <div className='relative'>
            <MdOutlineShoppingCart className='text-2xl' />
            <div className='absolute -top-1 -right-3 w-5 h-5 rounded-full bg-sky-900 text-white flex items-center justify-center text-xs'>{0}</div>
          </div>
        </div>

        {/* Acccount */}
        <div className='flex gap-4'>
          {
            isLoggedin ?
              <div className='flex items-center gap-1'>
                <img src={user.photo} width={32} height={32} className='rounded-full' />
                <div className='flex items-center gap-2'>
                  <span className='hidden md:block'>Welcome</span>
                  {user.firstName}
                </div>
                <button className='flex gap-2 items-center'>
                  <RiLogoutBoxLine />
                  LOGOUT
                </button>
              </div>
              :
              <div className='flex gap-2 items-center'>
                <button>LOGIN</button>
                <TbFaceId />
                <button>Register</button>
              </div>
          }
        </div>
      </div>

      <div className='flex bg-sky-950 text-sky-100 justify-center gap-2 md:gap-8 '>
        {
          topNavLinks.map(link => <Link key={link.label} to={link.url}>{link.label}</Link>)
        }
      </div>

    </nav>
  )
}

export default TopNavbar