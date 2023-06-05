<script>
  import { tick } from "svelte";
  import Modal from "./Modal.svelte";
  import Product from "./Product.svelte";

  let products = [{ id: "p1", productTitle: "book", productPrice: 9.99 }];
  let showModal = false;
  let closable = false;
  let text = "Howdy mate";

  const addToCart = (event) => {
    console.log(event);
  };

  const deleteProduct = (event) => {
    console.log(event.detail);
  };

  const transform = (ev) => {
    if (ev.which !== 9) {
      return;
    }

    ev.preventDefault();

    const { selectionStart, selectionEnd, value } = ev.target;
    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      ev.target.selectionStart = selectionStart;
      ev.target.selectionEnd = selectionEnd;
    });
  };
</script>

{#each products as { id, ...product } (id)}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal = true)}>Show modal</button>

{#if showModal}
  <Modal on:close={() => (showModal = false)} let:didAgree={closable}>
    <h1 slot="header">Howdy!</h1>
    {#each products as { id, ...product } (id)}
      <Product
        {...product}
        on:add-to-cart={addToCart}
        on:delete={deleteProduct}
      />
    {/each}
    <button
      disabled={!closable}
      slot="footer"
      on:click={() => (showModal = false)}>Confirm</button
    >
  </Modal>
{/if}

<textarea rows="5" value={text} on:keydown={transform} />
