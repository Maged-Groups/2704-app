import { Link } from 'react-router'
import topNavLinks from '../lib/topNavLinks';

console.log('TopNavbar.jsx file');

const TopNavbar = () => {
  console.log('TopNavbar Component rendered');



  return (
    <nav className='bg-sky-950 text-sky-100 flex justify-center gap-8'>
      {
        topNavLinks.map(link => <Link key={link.label} to={link.url}>{link.label}</Link>)
      }

    </nav>
  )
}

export default TopNavbar