import useIntroVid from "../../hooks/useIntroVid";

const IntroVideo = () => {
    const [showVid,hideVid] = useIntroVid();

    return (
        !hideVid?
        (<div className="fixed top-0 duration-500 z-[1000]  w-[100vw] h-[100vh]" style={{backgroundColor:(showVid?"#020914":null)}}>
            <video className='absolute left-[50%]  translate-x-[-50%]  top-[50%] translate-y-[-50%] mx-auto duration-300 z-[1000]' style={{opacity:(showVid?1:0)}} autoPlay muted>
                <source src='logoAnimation.mp4' type="video/mp4"></source>
            </video>
        </div>)
        :null
    );
};

export default IntroVideo;
