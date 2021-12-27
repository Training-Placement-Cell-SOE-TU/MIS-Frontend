import React from "react";
import Carousel from "react-elastic-carousel"
import Item from "../components/Item"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const Slider = () => {
    return (
        <>
      
          <div className="slide">
            <span className="slidetext">Upcoming Events</span>
            </div>
            <div className="slider">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
        </div>
      </>

  )
}
      

export default Slider;