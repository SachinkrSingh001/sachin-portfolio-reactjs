import logo from "../assets/Log.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () =>{
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sachin-kumar-singh-9a655621b/" target="blank"> <FaLinkedin /> </a>
        <a href="https://github.com/SachinkrSingh001" target="blank"> <FaGithub /> </a>
        <a href="https://www.youtube.com/channel/UCwNq7xIL-7g_pzqDQb-lSIQ" target="blank"><FaYoutube /> </a>   
        </div> 
    </nav>
  );  
};

export default Navbar;
