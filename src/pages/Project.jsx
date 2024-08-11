import { Fragment, useState } from "react";
import Header from "../components/shared/Header";
import BackGroundTransition from "../components/shared/BackGroundTransition";
import PageTitle from "../components/shared/PageTitle";
import PageHeading from "../components/shared/PageHeading";
import SocialMedia from "../components/shared/SocialMedia";
import NavigateToNextPage from "../components/shared/NavigateToNextPage";
import ProjectList from "../components/Projects/ProjectList";
import { motion } from "framer-motion";
import { projectData } from "../utils/Projects";

const Project = () => {
    const [searchFilter,setSearchFilter] = useState("All");
    let projectFilter = projectData
    if(searchFilter !== 'All'){
        projectFilter = projectData.filter((idx) => idx.type === searchFilter)
    }
    const projects = projectFilter.map((data) => <ProjectList key={data.key} data={data}/>)

    return (
        <Fragment>
            <BackGroundTransition/>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.5}}>
                <Header/>
                <PageTitle Title={"Projects"} rotate={true}/>
                <div className="container">
                    <div className="mx-[50px]  max-sm:mx-[10px] max-[520px]:mx-[0px] mb-16">
                        <PageHeading Title={"Projects"}/>
                        <ul className="flex  gap-8 max-[384px]:gap-4 justify-center items-center text-article-color text-[15px] flex-wrap">
                            <li className={`${searchFilter === 'All'?'searchFilters':null} duration-500 py-[5px] cursor-pointer rounded-[5px]`} onClick={() => setSearchFilter("All")}>All</li>
                            <li className={`${searchFilter === 'React'?'searchFilters':null} duration-500 py-[5px] cursor-pointer rounded-[5px]`}  onClick={() => setSearchFilter("React")}>React</li>
                            <li className={`${searchFilter === 'JavaScript'?'searchFilters':null} duration-500 py-[5px] cursor-pointer rounded-[5px]`}  onClick={() => setSearchFilter("JavaScript")}>JavaScript</li>
                            <li className={`${searchFilter === 'HTML&CSS'?'searchFilters':null} duration-500 py-[5px] cursor-pointer rounded-[5px]`}  onClick={() => setSearchFilter("HTML&CSS")}>Html & Css</li>
                        </ul>
                        <motion.div className="mt-10 grid grid-cols-2 place-items-center place-content-center gap-x-[-20px] gap-y-[20px] max-[1024px]:flex justify-center items-center flex-col" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:(0.3),duration:0.7}}>
                            {projects}
                        </motion.div>
                        <NavigateToNextPage navigatePath={'resume'} sentence={"Lets Go To My Resume"}/>
                        <SocialMedia/>
                    </div>
                </div>
            </motion.div>
        </Fragment>
    );
};

export default Project;
