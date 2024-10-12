import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";
import pic from "../../public/img-bg02cr.png";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
    id:1,
    text:"Home"
  },
  {
    id:2,
    text:"About"
  },
  {
    id:3,
    text:"Portfolio"
  },
  {
    id:4,
    text:"Experience"
  },
  {
    id:5,
    text:"Contacts"
  }
]
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Abhishe<span className="text-green-500 text-3xl">k</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            {/* Desktop navbar */}
            <ul className="hidden md:flex space-x-8">
              {
                navItems.map(({id,text })=>(

                  <li className="hover:scale-105 duration-200 cursor-pointer" key="id">
                   <Link
                      to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                      activeClass="active"
                    >
  {text}
</Link>

                   
                  </li>

                ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer" aria-label="Toggle Menu">
              {menu ?(
                 < MdOutlineClose size={24} />
              ):(
                 < FiMenu size={24} />)}
            </div>
          </div>       
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className="md:hidden bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 text-x1">
                  {
                navItems.map(({id,text })=>(
                  <li className="hover:scale-105 duration-200 cursor-pointer" key="id">
                    

                    <Link
                    onClick={() => setMenu(!menu)}
                      to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                      activeClass="active">
                         {text}
                        </Link>
                    
                    </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
