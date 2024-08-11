
const PageTitle = ({Title,rotate}) => {
    return (
        <div className={`fixed z-[-1000] ${rotate?'bottom-[150px] rotate-90 left-[-340px]':'bottom-0 left-[-4rem]'}`}>
            <h1 className='font-abrilFatface text-pageHeading text-[29.42vmin] text-nowrap'>{Title}.</h1>
        </div>
    );
};

export default PageTitle;
