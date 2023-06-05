<script>
  import { createEventDispatcher } from "svelte";

  export let productTitle;
  export let productPrice;
  export let isBestSeller = false;

  const dispatch = createEventDispatcher();

  const addToCart = () => {
    dispatch("add-to-cart", { id: "p1" });
  };

  const deleteFromCart = () => {
    dispatch("delete", "p1");
  };
</script>

<article>
  <h1>{productTitle}</h1>
  <h2>${productPrice}</h2>
  {#if isBestSeller}
    <h3>BestSeller!</h3>
  {/if}
  <button on:click={addToCart}>Add to Cart</button>
  <button on:click={deleteFromCart}>Delete</button>
</article>
