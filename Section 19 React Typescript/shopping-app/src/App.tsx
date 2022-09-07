import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import "./App.css";
import Item from "./models/item";
import { v4 as getId } from "uuid";

function App() {
  const [items, setitems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setitems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
