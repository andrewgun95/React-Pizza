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
  // Order doesn't matter when passing props in the component
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentication Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
      <Pizza
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
      />
    </main>
  );
}

// Props is an Object
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="This is spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  //   return React.createElement("footer", null, "We're currently open!");
  const hour = new Date().getHours();
  const [open, close] = [18, 20];
  const isOpen = hour >= open && hour <= close;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
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
