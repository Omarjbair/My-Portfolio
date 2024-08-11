
const ProjectList = ({data}) => {

    const technologies = data.technologies.map((idx,key) =>(
        <span key={key} className="py-1 px-[10px] capitalize rounded-[50px] bg-[#696869]">{idx}</span>
    ));
    
    return (
        <div onClick={() => window.open(data.projectLink, '_blank')} className="mouseHoverEffect projectList group relative w-[448px] max-[1280px]:w-[373px] max-[1024px]:w-full h-[400px] rounded-[9px] bg-no-repeat overflow-hidden cursor-pointer duration-300">
            <div className=" absolute top-0 left-0 h-full w-full duration-300 group-hover:shadow-[inset_0px_-200px_300px_0px_rgba(0,0,0,0.4)]"></div>
            <img className="object-cover w-full h-full block " src={data.img} loading="lazy"></img>
            <div className=" absolute bottom-2 left-5 z-[300] opacity-0 text-[#fff] duration-300 group-hover:opacity-100 group-hover:bottom-8" >
                <h1 className="text-[27px]  font-extrabold">{data.name}</h1>
                <div className="text-[11px] flex gap-[12px] font-medium items-center flex-wrap mt-2">
                    {technologies}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
