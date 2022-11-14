import React,{useState} from 'react'
import mysvg from '../../src/erste-group.svg'
import InputRange from 'react-input-range';

const Landingpage = () => {
  const [value,setValue] = useState(0)

  return (
    <div className='initial'>
      <div className='initial__left'>
        <div className='initial__left-logo'>
          <img src={mysvg} alt='' />
        </div>
        <div className='initial__left-philosophy'>Erste Digital</div>
        <div className='initial__left-reason'>Why should you invest</div>
      </div>
      <InputRange
        maxValue={20}
        minValue={0}
        value={4}
        onChange={value => setValue(value)} />
      <div className='initial__right'>
        <div id='overlay'></div>
        <div className='initial__right-menu'>
          <i className='fa-solid fa-bars'></i>
        </div>
        <div className='initial__right-textBox'>
          <p>
            “Investing money is the process of committing resources in a
            strategic way to accomplish a specific objective.” ― Alan Gotthardt
          </p>
        </div>
        <p>Explore Below</p>
      </div>
    </div>
  )
}

export default Landingpage
