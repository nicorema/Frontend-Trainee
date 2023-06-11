<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import { timer } from "./time-store";

  let showCart = true;
</script>

<Button on:click={() => (showCart = !showCart)}>Toggle Cart</Button>

{#if showCart}
  <Cart />
{/if}
<Products />

<p>Count: {$timer}</p>
