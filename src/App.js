import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShownState, setCartIsShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };
  const cartHideHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartShownState && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
