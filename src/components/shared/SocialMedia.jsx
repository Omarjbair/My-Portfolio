import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const SocialMedia = () => {
    
    return (
        <motion.div className="flex gap-6 mt-14 text-cw" initial={{x:8,y:20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay: 1,duration:0.5}}>
            <a target="blank" href="https://www.facebook.com/omar.jbair/"><FaFacebookF className="cursor-pointer hover:scale-125 duration-300" /></a>
            <a target="blank" href="https://www.instagram.com/omarjbair/"><FaInstagram className="cursor-pointer hover:scale-125 duration-300" /></a>
            <a target="blank" href="https://www.linkedin.com/in/omarjbair/"><FaLinkedinIn  className="cursor-pointer hover:scale-125 duration-300" /></a>
            <a target="blank" href="https://github.com/Omarjbair"><FaGithub className="cursor-pointer hover:scale-125 duration-300" /></a>
        </motion.div>
    );
};

export default SocialMedia;
