import './burger.css';
import Bun1 from "./images/bun1.png";
import Bun2 from "./images/bun2.png";
import Lettuce from "./images/lettuce.png";
import Meat from "./images/meat.png";
import Cheese from "./images/cheese.png";
import Bacon from "./images/bacon.png";
import Burger2 from "./images/burgerfinal2.png";
import { useEffect, useState } from 'react';

function App() {

  const [price, setPrice] = useState(0);
  const [burgerIngredients, setBurgerIngredients] = useState([]);
  const [burgerCount, setBurgerCount] = useState([]);
  const [disable, setDisabled] = useState(false);
  const [burgerr, setBurgerr] = useState(false);
  const [meatC, setMeatC] = useState(0)
  const [lettuceC, setLettuceC] = useState(0)
  const [cheeseC, setCheeseC] = useState(0)
  const [baconC, setBaconC] = useState(0)

  let meatCount = 0;
  let lettuceCount = 0;
  let cheeseCount = 0;
  let baconCount = 0;

  //Ordering Burger
  const Order = () => {

    setBurgerr(true)

    if (burgerCount.length) {

      while (burgerCount.length > 0) {
        if (burgerCount.includes("meatpic")) {
          let index = burgerCount.indexOf("meatpic")
          {
            var m = meatCount++
            burgerCount.splice(index, 1);
          }
        }

        else if (burgerCount.includes("lettucepic")) {
          let index = burgerCount.indexOf("lettucepic")
          {
            var l = lettuceCount++
            burgerCount.splice(index, 1);
          }
        }

        else if (burgerCount.includes("cheesepic")) {
          let index = burgerCount.indexOf("cheesepic")
          {
            var c = cheeseCount++
            burgerCount.splice(index, 1);
          }

        }

        else if (burgerCount.includes("baconpic")) {
          let index = burgerCount.indexOf("baconpic")
          {
            var b = baconCount++
            burgerCount.splice(index, 1);
          }
        }
      }
    }

    setMeatC(m)
    setLettuceC(l)
    setCheeseC(c)
    setBaconC(b)

  }

  //Clear Ingredients
  const Clear = () => {
    setBurgerIngredients([])
  }

  //Less Ingredients Count
  const lessCount = (name) => {
    if (burgerCount.includes(name)) {
      var index = burgerCount.indexOf(name);
      burgerCount.splice(index, 1);
    }
  }

  // Adding Ingredients
  const Addmeat = (money, imgpic) => {

    let meat = ""
    setPrice(eval(money + price));
    setBurgerIngredients(prevImages => [...prevImages, imgpic]);
    meat = "meatpic";
    setBurgerCount(prevImg => [...prevImg, meat]);
  }

  const Addlettuce = (money, imgpic) => {

    let lettuce = ""
    setPrice(eval(money + price));
    setBurgerIngredients(prevImages => [...prevImages, imgpic]);
    lettuce = "lettucepic";
    setBurgerCount(prevImg => [...prevImg, lettuce]);
  }

  const AddCheese = (money, imgpic) => {

    let cheese = ""
    setPrice(eval(money + price));
    setBurgerIngredients(prevImages => [...prevImages, imgpic]);
    cheese = "cheesepic";
    setBurgerCount(prevImg => [...prevImg, cheese]);
  }

  const Addbacon = (money, imgpic) => {

    let bacon = ""
    setPrice(eval(money + price));
    setBurgerIngredients(prevImages => [...prevImages, imgpic]);
    bacon = "baconpic";
    setBurgerCount(prevImg => [...prevImg, bacon]);
  }

  // Removing Ingredients
  const Lessmeat = (money, imgpic) => {

    lessCount("meatpic")

    if (price <= 0) {
      return;
    }

    else {

      if (burgerIngredients.includes(imgpic)) {
        let index = -1;
        setPrice(eval(price - money));
        for (let i = burgerIngredients.length - 1; i >= 0; i--) {
          if (burgerIngredients[i] === imgpic) {
            index = i;
            break;
          }
        }
        burgerIngredients.splice(index, 1);

      } else {
        setDisabled(disable)
      }
    }
  }

  const Lesslettuce = (money, imgpic) => {

    lessCount("lettucepic")

    if (price <= 0) {
      return;
    }

    else {

      if (burgerIngredients.includes(imgpic)) {
        setPrice(eval(price - money));

        let index = -1;
        for (let i = burgerIngredients.length - 1; i >= 0; i--) {
          if (burgerIngredients[i] === imgpic) {
            index = i;
            break;
          }
        }

        burgerIngredients.splice(index, 1);

      } else {
        setDisabled(disable)
      }
    }
  }

  const LessCheese = (money, imgpic) => {

    lessCount("cheesepic")

    if (price <= 0) {
      return;
    }
    else {

      if (burgerIngredients.includes(imgpic)) {
        let index = -1;
        setPrice(eval(price - money));
        for (let i = burgerIngredients.length - 1; i >= 0; i--) {
          if (burgerIngredients[i] === imgpic) {
            index = i;
            break;
          }
        }
        burgerIngredients.splice(index, 1);

      } else {
        setDisabled(disable)
      }
    }
  }

  const Lessbacon = (money, imgpic) => {

    lessCount("baconpic")

    if (price <= 0) {
      return;
    }

    else {

      if (burgerIngredients.includes(imgpic)) {
        let index = -1;
        setPrice(eval(price - money));
        for (let i = burgerIngredients.length - 1; i >= 0; i--) {
          if (burgerIngredients[i] === imgpic) {
            index = i;
            break;
          }
        }
        burgerIngredients.splice(index, 1);

      } else {
        setDisabled(disable)
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('slider');
    const yesButton = document.getElementById('yes-button');

    yesButton.addEventListener('click', () => {
      slider.style.display = 'block';
    });
  });

  useEffect(() => {

    if (burgerIngredients.length === 0) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }

  }, [burgerIngredients])

  console.log("m", meatC +1)
  console.log("l", lettuceC +1)
  console.log("c", cheeseC +1)
  console.log("b", baconC +1)

  //console.log("burgerCount", burgerCount)
  //console.log("burgerIngredients", burgerIngredients)

  return (

    <>

      <h1 className="text" style={{ marginBottom: "7rem" }}>Make Your Own Burger</h1>
      <div className="">
        <div className="left">
          <h1 style={{ marginTop: "2rem" }}>Current Price: {price}</h1>

          <h2 style={{ marginBottom: '10px' }}>  Meat <small style={{ fontSize: "20px" }}>(250)</small></h2>
          <div>
            <button className='button-87' onClick={() => Addmeat(250, Meat)}>More</button>
            <button className='button-88' disabled={disable} onClick={() => Lessmeat(250, Meat)}>Less</button>
          </div>

          <h2 style={{ marginBottom: '10px' }}> Lettuce <small style={{ fontSize: "20px" }}>(100)</small> </h2>
          <div>
            <button className='button-87' onClick={() => Addlettuce(100, Lettuce)}> More </button>
            <button className='button-88' disabled={disable} onClick={() => Lesslettuce(100, Lettuce)}> Less </button>
          </div>

          <h2 style={{ marginBottom: '10px' }}> Cheese <small style={{ fontSize: "20px" }}>(150)</small> </h2>
          <div>
            <button className='button-87' onClick={() => AddCheese(150, Cheese)}>More</button>
            <button className='button-88' disabled={disable} onClick={() => LessCheese(150, Cheese)}> Less </button>
          </div>

          <h2 style={{ marginBottom: '10px' }}> Bacon <small style={{ fontSize: "20px" }}>(200)</small> </h2>
          <div>
            <button className='button-87' onClick={() => Addbacon(200, Bacon)}>More</button>
            <button className='button-88' disabled={disable} onClick={() => Lessbacon(200, Bacon)}> Less </button>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <button id="yes-button" className='button-37' disabled={disable} onClick={() => Order()}> Order </button>
            <button className='button-38' onClick={() => Clear()}> Clear </button>
          </div>

        </div>

        {!burgerr ? (

          <div className="right"> 
            <div className='imgPosition'>

              <div>
                <img className="bun1img" src={Bun2} />
              </div>

              {burgerIngredients.length ?
                burgerIngredients.map((currElement, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="ingredients"
                        src={currElement}
                        alt="burger ingredient"
                      />
                    </div>
                  );
                })
                :
                  <h3 style={{color:"lightgrey", marginTop:'-4px'}}> Add Ingredients </h3>
                }

              <div>
                <img className="bun2img" src={Bun1} />
              </div>
            </div>
          </div>

        ) : (

          <div className="right">
            <div className='slider' id='slider'>
              <h1 style={{ marginTop: "1rem" }} className="text"> Your Burger is Ready</h1>
                <small style={{ color: "white", fontSize: "16px", marginTop: "-50px" }} >
                  (Final Price is {price}, Filled with &nbsp;
                  { meatC !== NaN && meatC !== undefined ? meatC + 1 + " Meat Patty, " : console.log("no meat")}
                  { lettuceC !== NaN && lettuceC !== undefined ? lettuceC + 1 + " Lettuce, " : console.log("no lettuce")}
                  { cheeseC !== NaN && cheeseC !== undefined ? cheeseC + 1 + " Cheese Slice, " : console.log("no cheese")}
                  { baconC !== NaN && baconC !== undefined ? baconC + 1 + " Bacon Patty. " : console.log("no bacon")})
                </small>
              <div>
               <img className="burgerReady" src={Burger2} />
              </div>
            </div>
          </div>

        )}
      </div>
    </>

  );
}

export default App;