<script>
  import { createEventDispatcher } from "svelte";

  let agreed = false;
  const dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={onClose} class="backdrop" />
<div class="modal">
  <header>
    <slot name="header" />
  </header>
  <div class="content">
    <slot />
  </div>

  <div class="disclaimer">
    <p>Before close, agreed</p>
    <button on:click={() => (agreed = true)}>Agree</button>
  </div>

  <footer>
    <slot name="footer" didAgree={agreed}>
      <button on:click={onClose} disabled={!agreed}>Close</button>
    </slot>
  </footer>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }

  header {
    border-bottom: 1px solid #ccc;
  }
</style>
