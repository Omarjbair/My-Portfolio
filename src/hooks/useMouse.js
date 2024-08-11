import {useEffect , useState} from "react";

export default function useMouse() {
    const [MousePosition, setMousePosition] = useState({
        x: null,
        y: null
    });

    useEffect(() => {
        function MouseHandler(e) {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
        }
        const time = setTimeout(() => document.addEventListener("mousemove", MouseHandler), 13);

        return () => {
            document.removeEventListener("mousemove", MouseHandler);
            clearTimeout(time);
        }
    });

    return MousePosition;
}