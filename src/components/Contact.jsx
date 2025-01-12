import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{ opacity: 1, y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-pink-800 via-slate-400 to-purple-800 bg-clip-text text-5xl tracking-tight text-transparent my-10 text-center text-4xl"> Get in Touch </motion.h1>
       
        
        
        <div className="text-center tracking-tighter">

        <motion.p 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"> {CONTACT.name}</motion.p>

            <motion.p 
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"> {CONTACT.address}</motion.p>

            <motion.p
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"> {CONTACT.phoneNo} </motion.p>

            <a href="#"
            className="border-b"> {CONTACT.email} </a>

            </div> 
    </div>
  );
};

export default Contact
