import React from "react";

const Leftslider = () => {
  const onChange = () => {
    console.log('On change');
  }
  return (
    <div className="transformed__wrapper">
      <div className="transformed">
        <div className="transformed__icon-cross" id="close_btn">
          <i className="fa-sharp fa-solid fa-xmark"></i>
        </div>
        <div className="tranformed__numbers">01</div>
        <div className="tranformed__text">Grow your money</div>

        <div className="transformed__input-range">
          <label htmlFor="01">01</label>
          <input type="range" className="rangeInput" min="1" max="10" value="1" onChange={onChange}/>
          <label htmlFor="10">10</label>
        </div>
      </div>
    </div>
  );
};

export default Leftslider;
