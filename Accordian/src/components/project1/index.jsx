import React, { useState } from "react";
import data from "./data.js";
const index = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log("clicked");
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          <div className="item">
            {data.map((dataItem) => (
              <div className="item1" key={dataItem.id}>
                <div className="title" onClick={() => handleClick(dataItem.id)}>
                  <h3 className="question">{dataItem.question}</h3>
                  <span>{selected===dataItem.id?'-':'+'}</span>
                  {selected === dataItem.id ? <p>{dataItem.answer}</p> : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default index;
