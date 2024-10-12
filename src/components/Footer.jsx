import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"
export default function Footer() {
  return (
   <>
   <hr />
<footer className="py-12">
<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">

<div className="flex flex-col items-center justify-center">
    <div className="flex space-x-4">
        <FaFacebook size={24}/>
        <FaInstagram size={24}/>
        <FaLinkedin size={24}/>
        <FaYoutube size={24}/>
    </div>
    <div className="mt-8 border-t border-grey-700 pt-8 flex flex-col items-center">
        <p className="text-sm">
            &copy; 2024 Your Company . All rights reserved.
        </p>
        <p className="text-sm">
            Supportive Partner💓 Arvind
        </p>
    </div>
</div>
</div>
</footer>
   </>
  )
}
