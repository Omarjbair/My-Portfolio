import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { navList } from "../../utils/Navbar";

const Header = () => {
    const [showSideBar,setShowSideBar] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const List = navList.map((idx) =>(
        <li key={idx.key} onClick={() => navigate(`/${idx.navigatePath}`)} className={`mouseHoverEffect  relative hover:cursor-pointer max-md:mx-0 max-md:font-black max-md:text-cw max-md:text-[18px] ${location.pathname.slice(1,location.pathname.length) === idx.navigatePath?'hidden':null}`}><a className="navLink">{idx.name}</a></li>
    ));
    
    return (
        <nav className="z-[2000]">
            <div className="container flex justify-between items-center">
                <img onClick={() => navigate('/')} className="cursor-pointer" src="/logo.svg"></img>
                <div>
                    <ul style={{right:(showSideBar?"0vw":"-200vw")}} className="text-navLink flex justify-between gap-[30px] text-[15px] duration-500 max-md:fixed max-md:z-[6000] max-md:w-[100vw] max-md:h-[100vh] max-md:bg-backgroundColor max-md:top-0 max-md:flex-col max-md:items-center max-md:justify-start max-md:gap-[40px] max-md:pt-[100px] ">
                        {List}
                        <FiX style={{right:(showSideBar?"40px":"-200vw")}} className="hidden duration-500 max-md:block text-[35px] text-navLink fixed top-11" onClick={() => setShowSideBar(false)}/>
                    </ul>
                    <RiMenuFill className="hidden max-md:block text-[35px] text-navLink" onClick={() => setShowSideBar(true)}/>
                </div>
            </div>
        </nav>
    );
};

export default Header;
