import {useEffect,useState} from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Anime from 'react-anime'

const Main = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY)
  return (
    <div className="firstPage">
       {/* <Anime
          translateY='-700'
          duration='1000'
          easing='linear'
          opacity='0'
        > */}
            <div className='banner'>ASSETS & INVESTMENTS</div>
        {/* </Anime> */}
      <Firstpage scrollY={scrollY}/>
      <Secondpage scrollY={scrollY} />
    </div>
  )
}

export default Main