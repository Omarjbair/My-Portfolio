import './index.css';
import MouseTraker from './components/shared/MouseTraker';
import IntroVideo from './components/shared/IntroVideo';
import { Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  let title = (location.pathname.slice(1,location.pathname.length) === ''?"Home":location.pathname.slice(1,location.pathname.length));
  title = title.charAt(0).toUpperCase() + title.slice(1);
    useEffect(() => {
        document.title = `${title} | Omar Jbair`;
    }, [title]);

  return ( 
    <Fragment>
      <div className='gridBackGround top-0 fixed z-[-2000]'></div>
      <div className='relative duration-500 w-full h-full'>
        <IntroVideo/>
        <MouseTraker/>
      </div>
      <main className='font-inter relative pt-16'>
        <Outlet/>
      </main>
    </Fragment>
  );
}

export default App;