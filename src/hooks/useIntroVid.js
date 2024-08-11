import { useEffect, useState } from 'react'

const useIntroVid = () => {
    const [showVid,setShowVid] = useState(true);
    const [hideVid,setHideVid] = useState(false);
    useEffect(() => {
        const time = setTimeout(() => {
        setShowVid(false);
        },3000);

        const time2 = setTimeout(() => {
            setHideVid(true);
            },3500);
        
        return () => {
            clearTimeout(time); 
            clearTimeout(time2); 
        }
    },[]);

    return [showVid,hideVid];
}

export default useIntroVid;
