import React, { useState } from "react";
import '../css/Tab.css';
import testimage1 from '../Images/testimage1.png'
import testimage2 from '../Images/testimage2.png'
import testimage3 from '../Images/testimage3.png'

const Tabs = () => { 
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";
  return (
    <>
     <div className="tabs">
        <li
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Tab 1
        </li>
        <li
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Tab 2
        </li>
        <li
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Tab 3
        </li>
      </div>    
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <img className={`tab_image`}src={testimage1} alt="testimage1" />
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <img className={`tab_image`}src={testimage2} alt="testimage2" />
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
          <img className={`tab_image`}src={testimage3} alt="testimage3" />
        </div>
      </div>  
    </>
  );
};

export default Tabs;