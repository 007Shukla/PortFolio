
import { FaLinkedin, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { RiJavaLine, RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandMysql } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import pic from "../../public/img-bg02cr.png";

export default function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1' >
          <span className='text-xl'>Welcom In My Profile</span>
          <div className='flex space-x-1 text-1xl md:text-4xl'>
            <h1>Hello, i am a </h1>
            {/* <span className='text-red-700 font-bold'> Devloper</span> */}
            <ReactTyped
            className='text-red-700 font-bold'
          strings={["Developer","Programer","Coder"]}
          typeSpeed={40}
          backSpeed={50} 
          loop={true}
        />
          </div>
          <br />
          <p className='text-sm md: text-md text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos neque libero mollitia obcaecati tenetur!
            Obcaecati error, voluptatum sapiente nemo id iusto dolore
            minima adipisci aliquidfacere illum quia dolorem odio!</p>
          <br />
          {/* {social media icons} */}
        <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
        
        
        {/* <div className=' flex space-y-1.2'> */}
        <div className='flex flex-col space-y-2 text-center'>
            <h1 className='font-bold font-2xl'> Available on</h1>
            <ul className='flex space-x-5'>
              <li>
              <a href="https://www.facebook.com/profile.php?id=100036550011989"  target="_blank">
                <FaSquareFacebook className='text-2xl cursor-pointer' />
                </a>
              </li>
              
              <li>
         <a href="https://www.linkedin.com/in/abhishek-shukla-a9115b2a6/ " target="_blank">
                <FaLinkedin className='text-2xl cursor-pointer' /></a>
              </li>
              <li>
                <a href="https://www.youtube.com/@abhi_tech007" target="_blank">
                <GrYoutube className='text-2xl cursor-pointer' /></a>
              </li>
              <li>
              <a href="https://www.instagram.com/code_with_masti_07/" target="_blank">
                <FaSquareInstagram className='text-2xl cursor-pointer' />
                </a>
              </li>
            </ul>
          </div>
          <div className='space-y-2'>
          <h1 className='font-bold text-xl'>Currently working on</h1>
            <div className='flex space-x-5'>
            <RiJavaLine  className='text-3xl md:4xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <TbBrandMysql  className='text-3xl md:4xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <RiReactjsLine  className='text-3xl md:4xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <TbBrandJavascript  className='text-3xl md:4xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            </div>
            </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[500px] md:h-[450px]' alt="Loding...." />
        </div>
      </div>
      <hr />
    </div>

  )
}
