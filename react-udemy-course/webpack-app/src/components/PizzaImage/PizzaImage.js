import React from "react";

import classes from "./PizzaImage.css";
import PizzaImg from '../../assets/pizza.jpg' 

const PizzaImage = props => (
  <div className={classes.PizzaImageContainer}>
      <img src={PizzaImg} className={classes.PizzaImage}/>
  </div>
);

export default PizzaImage;
