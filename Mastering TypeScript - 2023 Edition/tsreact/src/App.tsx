import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ShoppingList } from "./components/ShoppingList";
import { Item } from "./models/Item";
import { ShoppingListForm } from "./components/ShoppingListForm";

const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const onAddItem = (product: string, quantity: number): void => {
    setItems([...items, { id: uuidv4(), product, quantity }]);
  };

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={onAddItem} />
    </div>
  );
};

export { App };
