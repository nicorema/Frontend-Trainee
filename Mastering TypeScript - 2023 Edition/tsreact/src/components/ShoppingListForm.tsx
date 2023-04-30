import { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (product: string, quantity: number) => void;
}

const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (productInputRef.current?.value && quantityInputRef.current?.value) {
      const product = productInputRef.current.value;
      const quantity = parseInt(quantityInputRef.current.value);

      onAddItem(product, quantity);
      productInputRef.current.value = "";
      quantityInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product name" ref={productInputRef} />
      <input
        type="number"
        placeholder="Product quantity"
        min={0}
        ref={quantityInputRef}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export { ShoppingListForm };
