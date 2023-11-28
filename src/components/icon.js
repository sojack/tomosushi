import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const iconStyle = {
    width: '1.2em',
    height: '1.2em',
    marginRight: '1em'
  };

const Icon = (props) => {
  if (props.icon === "veg") {
    return <StaticImage
    src="../images/menu/icon-V.svg"
    alt="Vegetarian Dish"
    title="Vegetarian Dish"
    max-height="1em"
    max-width="1em"
    style={iconStyle}
    />
  } else if(props.icon === "gf"){
    return <StaticImage
    src="../images/menu/icon-GF.svg"
    alt="Gluten-Free Dish"
    title="Gluten-Free Dish"
    style={iconStyle}
    />
  } else if(props.icon === "u"){
    return <StaticImage
    src="../images/menu/icon-U.svg"
    alt="Unagi Sauce"
    title="contains Unagi Sauce"
    style={iconStyle}
    />
  }
  ;
};

export default Icon;
