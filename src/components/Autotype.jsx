import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AutoType = () => {
  const el = useRef(null); // Create a ref for the element

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [
        "Full Stack developer",
        "Web Designer",
        "Web developer",
        "Developer"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(el.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <div className="auto-type" ref={el}></div>; // Use the ref here
};

export default AutoType;