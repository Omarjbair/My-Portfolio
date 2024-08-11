import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    
    return (
    <div className='fixed top-0 left-0 w-[100vw] h-[100vh] z-[100000] bg-backgroundColor text-cw flex items-center justify-center flex-col gap-4'>
        <h1 className="text-[25px]">Error {error.status + " "} Page {error.statusText}</h1>
        <h3 className="cursor-pointer hover:underline duration-500" onClick={() => navigate('/')}>Return To Home</h3>
    </div>
    );
};

export default ErrorPage;
