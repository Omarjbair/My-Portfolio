import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const NavigateToNextPage = ({sentence,navigatePath}) => {
    const navigate = useNavigate();
    
    return (
        <motion.div onClick={() => navigate(`/${navigatePath}`)} className="flex mt-12 items-center gap-[20px] text-cw" initial={{x:8,y:20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay:0.7,duration:0.5}}>
            <a className="hover:underline cursor-pointer text-[14px] font-medium">{sentence}</a>
            <motion.div className="cursor-pointer" initial={{x:0}} animate={{x:[20,0,20]}} transition={{ease: "easeInOut",delay:3,duration:1,repeat: Infinity,repeatDelay:0.05}}>
                <BsArrowRight className="text-[25px]"/>
            </motion.div>
        </motion.div>
    );
};

export default NavigateToNextPage;
