import React, { useState } from "react";
import '../css/Tab.css';
// import testimage1 from '/Images/testimage1.png'
// import testimage2 from '/Images/testimage2.png'
// import testimage3 from '/Images/testimage3.png'

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
          Most Popular Games
        </li>
        <li
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Hot Deals
        </li>
      
      </div>    
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <img className={`tab_image`} src='/Images/testimage1.png' alt="testimage1" />
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <img className={`tab_image`} src='/Images/testimage2.png' alt="testimage2" />
        </div>
      </div>  
    </>
  );
};

export default Tabs;