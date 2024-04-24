
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
<nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between fixed top-0 w-full">
    <a className="font-bold text-xl tracking-tight" href="#">Southern RP</a>
    <div className="flex items-center">
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Home</a>
        <Link to='./Apply' className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700">Apply</Link>
    </div>
</nav>
</>
  )
}

export default Navbar
