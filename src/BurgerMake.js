import React from 'react'

const BurgerMake = ({image}) => {
    
    let burger = [];

  for (let i = 0; i < 3; i++) {
    burger.push(<img src= {image} className= "pic" />);
  }
  for (let i = 0; i < 100; i++){
    burger.push(<div><img src= {image} className= "pic" /></div>);
  }
  for (let i = 0; i < 100; i++) {
    burger.push(<div><img src= {image} className= "pic" /></div>);
  }
  for (let i = 0; i < 100; i++) {
    burger.push(<div><img src= {image} className= "pic" /></div>);
  }

return burger;
}

export default BurgerMake;