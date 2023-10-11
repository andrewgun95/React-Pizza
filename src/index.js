import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/index.scss";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  // Style in JSX using object notation
  // {property1:value1, property2:value2}
  //   const style = { color: "red", fontSize: "2rem", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  // Order doesn't matter when passing props in the component
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* SHORT CIRCUITING CONDITIONAL RENDERING */}
      {/* pizzas.length > 0 && (rendering elements...) Or used pizzas ?? (rendering elements...)*/}

      {pizzas.length > 0 ? (
        // React Fragment
        // Or short version <> rendering elements </>
        <React.Fragment key="test123">
          <p>
            Authentication Italian cuisine. 6 creative dishes to choose from.
            All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((e) => (
              <Pizza pizzaObject={e} key={e.name} />
            ))}
            {/* {[
          <Pizza pizzaObject={pizzaData[0]} />,
          <Pizza pizzaObject={pizzaData[1]} />,
          ]} */}
            {/* <Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="pizzas/spinaci.jpg"
            price={10}
          />
          <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mushrooms"
            price={12}
            photoName="pizzas/funghi.jpg"
          /> */}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later !</p>
      )}
    </main>
  );
}

// Props is an Object, try using "Destructuring"
function Pizza({ pizzaObject }) {
  /* CONDITIONAL WITH MULTIPLE RETURNS */
  // if (condition) return (rendering elements...)
  // return (rendering elements...)

  // if (pizzaObject.soldOut) return null; // Not show if 'sold out'

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="This is spinaci" />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>

        {/* 1. Both element and content is evaluated  */}
        {/* {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )} */}

        {/* 2. Only content is evaluated */}
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  console.log(props);
  //   return React.createElement("footer", null, "We're currently open!");
  const hour = new Date().getHours();
  const [openHour, closeHour] = [0, 24];
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* CONDITIONAL WITH TERNARY OPERATOR */}
      {/* condition ? true : false (alternate options) */}
      {/* Conditional statement doesn't work because not producing a value */}
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 until {closeHour}:00
        </p>
      )}
      {/* {false} {true} // will not render ! */}
      {/* {new Date().toLocaleTimeString()}. We're currently open! */}
    </footer>
  );
}

// Props is an Object, try using "Destructuring"
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us to
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// const Component = function() {}
// or const Component = () => {}

// Component is a function. start with Upper Case. Return JSX with only one element (a tag)

function App() {
  return (
    // Can't used class but instead a className
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passed Component 'App' to be rendered
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// What is Strict Mode ?
// Render component twice - to find certain bugs, check using outdated part of React API
