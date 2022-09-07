import React from "react";

import Item from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
