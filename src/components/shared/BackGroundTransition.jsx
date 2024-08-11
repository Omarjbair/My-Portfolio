import {
    easeIn,
    easeInOut,
    motion
} from "framer-motion";

const BackGroundTransition = () => {
    return ( <
        motion.div className = "fixed top-0 z-[-100] w-[100vw] h-[100vh] bg-backgroundColor"
        initial = {
            {
                opacity: 1
            }
        }
        animate = {
            {
                opacity: 0,
            }
        }
        transition = {
            {
                ease: easeInOut,
                duration: 0.4
            }
        } > < /motion.div>
    );
};

export default BackGroundTransition;