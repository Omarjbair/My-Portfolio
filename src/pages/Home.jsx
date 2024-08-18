import { BsArrowRight  } from "react-icons/bs";
import { Fragment } from "react";
import Header from "../components/shared/Header";
import BackGroundTransition from "../components/shared/BackGroundTransition";
import PageTitle from "../components/shared/PageTitle";
import { motion } from "framer-motion";
import SocialMedia from "../components/shared/SocialMedia";
import NavigateToNextPage from "../components/shared/NavigateToNextPage";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <Fragment>
            <BackGroundTransition/>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.5}}>
                <Header/>
                <PageTitle Title={"Home"}/>
                <div className="text-article-color mt-20 mb-10">
                    <div className="container">
                        <div className="mx-[100px] max-lg:mx-[50px] max-sm:mx-[10px] max-[520px]:mx-[0px]">
                            <motion.h1 className="HomeName text-[34px] font-medium tracking-[10px] relative max-sm:tracking-[6px]" initial={{x:8,y:20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay:(0.2),duration:0.5}}>I'M OMAR JBAIR</motion.h1>
                            <motion.div className="mt-6 font-normal leading-[2.3] max-md:text-[14px]" initial={{x:8,y:20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay:(0.4),duration:0.5}}>
                                <p>Your friendly neighborhood frontend developer and Computer engineer. I spend my days (and often nights) painting the Internet canvas with <a onClick={() => navigate('/projects')}  className="font-black text-cw cursor-pointer hover:text-[#0056b3] hover:underline duration-200">PROJECTS </a> and lines of code, turning zeroes and ones into immersive, interactive experiences.</p>
                                <p className="mt-10">Driven by a passion for creativity and innovation, I thrive on transforming concepts into captivating digital solutions that captivate and inspire users., I approach each project with enthusiasm and dedication, ensuring that every pixel and interaction is thoughtfully crafted to deliver an exceptional user experience.</p>
                                </motion.div>
                            <NavigateToNextPage navigatePath={'about'} sentence={"See More About Me"}/>
                            <SocialMedia/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default Home;
