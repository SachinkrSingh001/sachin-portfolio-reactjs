import aboutImg from "../assets/about.png"
import { ABOUT_TEXT, ABOUT_TEXT1 } from "../constants"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="bg-gradient-to-r from-pink-800 via-slate-400 to-purple-800 bg-clip-text text-5xl tracking-tight text-transparent my-20 text-center text-4xl">About 
            <span className="bg-gradient-to-r from-pink-800 via-slate-400 to-purple-800 bg-clip-text text-5xl tracking-tight text-transparent text-neutral-500"> Me</span></h1>

        <div className="flex flex-wrap">

          <motion.div
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
           
           <div className="flex items-center justify-center">
             <img className="rounded-2xl" src={aboutImg} alt="about" />
           </div>

          </motion.div> 
          <motion.div 
          whileInView={{ opacity: 1, x: 0}}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
               <p className="my-20 max-w-xl py-6">{ABOUT_TEXT}</p>
               
               </div>
            <div className="flex justify-center lg:justify-start">
            <p className="my:0 max-w-xl py-0">{ABOUT_TEXT1}</p>
            </div>
            
            
          </motion.div> 

        </div>    
    </div>
  )
}

export default About
