//19.Write a React component that implements a tooltip.
import React, { useState } from 'react';
import './Tooltip.css'; 

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="tooltip">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
