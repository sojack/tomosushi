import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const MenuItem = (props) => {
  return (
    <>
      <div className="menuItem">
        <div className="menuImage">
          {/* <StaticImage src={props.imageUrl} alt={props.title} /> */}
        </div>
        <div className="menuTitle">{props.title}</div>
        <div className={`menuOption ${props.menuStyle}`}>
          <span className="optionDesc">{props.description}</span>
          <span className="optionPrice">{props.price}</span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
