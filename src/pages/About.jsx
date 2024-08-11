import Header from "../components/shared/Header";
import BackGroundTransition from "../components/shared/BackGroundTransition";
import PageTitle from "../components/shared/PageTitle";
import AboutDescription from "../components/AboutMe/AboutDescription";
import { Info } from "../utils/AboutMeInfo";
import { motion } from "framer-motion";
import SocialMedia from "../components/shared/SocialMedia";
import PageHeading from "../components/shared/PageHeading";
import NavigateToNextPage from "../components/shared/NavigateToNextPage";
import { Fragment } from "react";

const About = () => {
    const Information = Info.map((index) => <AboutDescription key={index.key} name={index.name} info={index.info}/>);

    return (
        <Fragment>
            <BackGroundTransition/>
            <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.5}}>
                <Header/>
                <PageTitle Title={"About Me"}/>
                <div className="container">
                    <div className="mx-[100px] max-lg:mx-[50px] max-sm:mx-[10px] max-[520px]:mx-[0px] mb-16">
                        <PageHeading Title={"About Me"}/>
                        {Information}
                        <NavigateToNextPage navigatePath={'projects'} sentence={"Lets Continue To Projects"}/>
                        <SocialMedia/>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default About;

