import React, { useState } from "react";

function Accordian({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div className="ui styled accordion">{renderItems}</div>;
}

export default Accordian;
