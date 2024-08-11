
const AboutDescription = ({name,info}) => {
    return (
        <div className="flex gap-[20px]">
            <div className="flex flex-col items-center" >
                <div className="w-[15px] h-[15px] bg-mark rounded-[50%] border-[2px] border-cw border-solid"></div>
                <div className="relative w-[1px] h-[100%] bg-[#ffffff5e]"></div>
            </div>
            <div>
                <h1 className="text-[18px] font-medium text-cw mb-[10px]">{name}</h1>
                <p className="font-normal text-article-color leading-[2] text-[15px] pb-[40px]">{info}</p>
            </div>
        </div>
    );
};

export default AboutDescription;

