import useMouse from '../../hooks/useMouse';

const MouseTraker = () => {
    const {x , y} = useMouse();
    return (
        <div className='max-md:hidden z-[-99]'>
            <div id='outerCircle' className='absolute w-[85px] h-[85px] outline outline-[1.5px] outline-cursor border-[1px] border-cursorBorder border-solid rounded-full translate-x-[-50%] translate-y-[-50%]  duration-[70ms] ease-linear' style={{left:x ,top:y}}></div>
            <div id='innerCircle' className='absolute w-[8px] h-[8px] bg-cursor border-[1px] border-cursorBorder border-solid rounded-full translate-x-[-50%] translate-y-[-50%] duration-[30ms] ease-linear' style={{left:x ,top:y}}></div>
        </div>
    );
};

export default MouseTraker;
