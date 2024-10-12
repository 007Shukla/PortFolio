import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function Contact() {
  const { 
    register, 
    handleSubmit,
      formState:{ errors } 
    } = useForm();
    const onSubmit = async(data)=> {
      const userInfo={
          name:data.name,
          email:data.email,
          message:data.message
      }
      try{
        await  axios.post("https://getform.io/f/bkkgodlb",userInfo);
        toast.success("Your Message has Been Sent");
      } catch (error){
        console.log(error);
        toast.error("Something Went Wrong");
      }
    }
  return (
    <>
    <div name="Contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Plese fill Out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5" >
             <form 
             onSubmit={handleSubmit(onSubmit)}
             className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
               
                <label className="block text-gray-700">Full Name :</label>
                <input
                 {...register("name", { required: true })}
                name="name"  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-light focus:out" placeholder="Enter your FullName" type="text" id="name" />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              
                <label className="block text-gray-700">Email :</label>
                <input
                {...register("email", { required: true })}
                name="email"  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-light focus:out" placeholder="Enter your Email Address" type="text" id="email" />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
               
                <label className="block text-gray-700">Message :</label>
                <textarea
                {...register("message", { required: true })}
                name="message" className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-light focus:out" placeholder="Enter your Query" type="text" />
                {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-300">Send</button>
            </form></div>
    </div>
    </>
  )
}
