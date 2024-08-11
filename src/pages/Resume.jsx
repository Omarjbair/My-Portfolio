import { Fragment } from "react";
import BackGroundTransition from "../components/shared/BackGroundTransition";
import Header from "../components/shared/Header";
import PageTitle from "../components/shared/PageTitle";
import PageHeading from "../components/shared/PageHeading";
import SocialMedia from "../components/shared/SocialMedia";
import NavigateToNextPage from "../components/shared/NavigateToNextPage";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import cv from '/cv.pdf'

const Resume = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <BackGroundTransition/>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.5}}>
                <Header/>
                <PageTitle Title={"Resume"} rotate={true}/>
                <div className="container">
                    <div className="mx-[100px] max-lg:mx-[50px] max-sm:mx-[10px] max-[520px]:mx-[0px] mb-10">
                        <PageHeading Title={"Resume"}/>
                        <p className="text-cw text-[15px]">Reach out to me via my <a onClick={() => navigate('/contact')} className="font-black cursor-pointer hover:text-[#0056b3] hover:underline duration-100">contact page</a> . <a href={cv} target="_blank" className="font-black cursor-pointer hover:text-[#0056b3] hover:underline duration-100">view</a> or <a href={cv} download className="font-black cursor-pointer hover:text-[#0056b3] hover:underline duration-100">download</a> the resume</p>
                        <div className="bg-[#fff] mt-10 w-[60%] max-lg:w-[80%] max-md:w-full">
                            <img src="./cv1.svg" loading="lazy"></img>
                            <img src="./cv2.svg" loading="lazy"></img>
                        </div>
                        <NavigateToNextPage navigatePath={'contact'} sentence={"Are you convinced to contact me now ?"}/>
                        <SocialMedia/>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default Resume;
