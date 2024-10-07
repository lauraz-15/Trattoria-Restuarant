import logo from "./logo.svg";
import "./App.css";

const italianDishData = [
  {
    name: "Risotto alla Milanese",
    ingredients: "Creamy rice cooked with saffron, butter, and Parmesan cheese",
    price: 16,
    photoName: "dishes/risotto_milanese.jpg",
    soldOut: false,
  },
  {
    name: "Braciole",
    ingredients: "Rolled flank steak stuffed with breadcrumbs, cheese, and cooked in tomato sauce",
    price: 20,
    photoName: "dishes/braciole.jpg",
    soldOut: false,
  },
  {
    name: "Veal Piccata",
    ingredients: "Tender veal cutlets with a tangy lemon and caper sauce",
    price: 22,
    photoName: "dishes/veal_piccata.jpg",
    soldOut: false,
  },
  {
    name: "Pappardelle with White Bolognese",
    ingredients: "Wide egg pasta with beef, pancetta, mushrooms, and white Bolognese sauce",
    price: 18,
    photoName: "dishes/pappardelle_bolognese.jpg",
    soldOut: false,
  },
  {
    name: "Swordfish Steaks with Salmoriglio",
    ingredients: "Grilled swordfish steaks with lemon, garlic, and herb marinade",
    price: 24,
    photoName: "dishes/swordfish_salmoriglio.jpg",
    soldOut: true,
  },
  {
    name: "Gnocchi with Asparagus and Pancetta",
    ingredients: "Potato dumplings tossed with asparagus, pancetta, and light cream sauce",
    price: 19,
    photoName: "dishes/gnocchi_asparagus.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Trattoria Restuarant 🍝</h1>
    </header>
  );
}

function Dishes() {
  const dishes = italianDishData;

  return (
    <div>
      {dishes && (
        <ul className="dishes">
          {dishes.map((item) => (
            <Dish dishItem={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Dish({ dishItem }) {
  return (
    <li className={dishItem.soldOut ? "dish sold-out" : "dish"}>
      <img src={dishItem.photoName} alt={dishItem.name} />
      <div>
        <h3>{dishItem.name}</h3>
        <p>{dishItem.ingredients}</p>
        <span>{dishItem.soldOut ? "SOLD OUT" : dishItem.price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <>
      <div className="menu">
        <h2>OUR MENU</h2>
        <p>Experience the flavors of Italy with our authentic trattoria menu. Choose from six artisanal dishes, all crafted with organic ingredients and baked to perfection in our traditional stone oven. Fresh, flavorful, and irresistibly delicious.</p>
        <Dishes />
      </div>
    </>
  );
}

function Footer() {
  let currHour = new Date().getHours();
  console.log(currHour);

  let open = 10;
  let close = 18;

  return (
    <footer className="footer">
      <div className="order">
        {currHour > open && currHour < close ? (
          <p>We are open until {close}:00, come to visit us or order online</p>
        ) : (
          <p>
            We are currently close now, please visit us betwen the hours {open}:00 and {close}:00
          </p>
        )}

        <button className="btn">Order Now</button>
        {open && <p> We are open 😊</p>}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
