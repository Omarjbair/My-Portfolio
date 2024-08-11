import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID , formRef.current, {publicKey: import.meta.env.VITE_PUBLIC_KEY})
        .then(() => {
                console.log('SUCCESS!');
            },(error) => {
                console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-[32px] w-[540px] max-sm:w-full my-10">
            <input className="bg-[transparent] h-[38px] text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="from_name" type="text" required placeholder="Name"  autoComplete="off"/>
            <input className="bg-[transparent] h-[38px] text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="from_email" type="text" required placeholder="Email"  autoComplete="off"/>
            <textarea className="bg-[transparent] h-auto text-cw text-[16px] py-6 px-[21px] border-[1px] border-solid border-border-color overflow-hidden rounded-[4px] focus:outline-none placeholder:text-[#6C757D]" name="message" type="text" required placeholder="Message" autoComplete="off"/>
            <input className="mouseHoverEffect cursor-pointer text-[15px] text-backgroundColor rounded-[5px] bg-cw border-none py-4 px-10 w-[35%] max-sm:w-[200px] duration-300 hover:bg-[#cacaca] hover:" type="submit" value={"Send Message"}/>
        </form>
    );
};

export default Form;
