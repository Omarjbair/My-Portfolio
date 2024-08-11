import { Fragment } from "react";
import Header from "../components/shared/Header";
import BackGroundTransition from "../components/shared/BackGroundTransition";
import PageTitle from "../components/shared/PageTitle";
import PageHeading from "../components/shared/PageHeading";
import NavigateToNextPage from "../components/shared/NavigateToNextPage";
import SocialMedia from "../components/shared/SocialMedia";
import Form from "../components/Contact/Form";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <Fragment>
            <BackGroundTransition/>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.5}}>
                <Header/>
                <PageTitle Title={"Contact"}/>
                <div className="container">
                    <div className="mx-[100px] max-lg:mx-[50px] max-sm:mx-[10px] max-[520px]:mx-[0px] mb-10 ">
                        <PageHeading Title={"Contact"}/>
                        <p className="text-[15px] text-cw">Get in touch or shoot me an email directly on <span className="font-extrabold">omar.jbair@gmail.com</span></p>
                        <Form/>
                        <NavigateToNextPage navigatePath={''} sentence={"Go Back Home"}/>
                        <SocialMedia/>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default Contact;
