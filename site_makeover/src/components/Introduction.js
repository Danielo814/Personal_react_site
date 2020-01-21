import React from "react";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <p className="intro-line-spacing">Hello, i'm Daniel Ojeda.</p>
        <p className="intro-line-spacing">I'm a web developer</p>
        <p>living in San francisco.</p>
        {/* <i class="angle down icon arrow-down"></i> */}
        <div class="arrow-down">
          <a className="arrow-transition" href="#project-container">
            {" "}
            &#8964;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
