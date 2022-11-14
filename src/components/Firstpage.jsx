import React, { useState, useEffect } from 'react'
import Graduate from '../figma/Graduate.png'
import Anime from 'react-anime'

const Firstpage = ({ scrollY }) => {
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    if (scrollY >= 500) {
      setScrollable(true)
    } else {
      setScrollable(false)
    }
  }, [scrollY])

  console.log(scrollY)

  return (
    <div className='flex'>
      {(scrollY >= 200&& scrollY < 700) && (
        <Anime
          translateX={scrollable ? '-700' : '700'}
          duration='3000'
        >
          <div className='flex-left'>
            <img src={Graduate} alt='Graduate' className='graduatePicture' />
          </div>
        </Anime>
      )}
      {(scrollY >= 200&& scrollY < 700) && (
        <Anime
          translateX={scrollable ? '600' : '-600'}
          duration='3000'
          // delay={scrollable ? '1000' : ''}
          // endDelay='500'
        >
          <div className='flex-right'>
            <div className='card'>
              <p>
                THIS IS <span>JACOB</span>.<br /> HE JUST{' '}
                <span>GRADUATED</span> AND WONDERS WHAT COMES NEXT
              </p>
            </div>
          </div>
        </Anime>
      )}
    </div>
  )
}

export default Firstpage
