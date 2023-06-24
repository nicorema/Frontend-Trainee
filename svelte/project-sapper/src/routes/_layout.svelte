<script>
  import Header from "../components/UI/Header.svelte";
  export let segment;
</script>

<main>
  <slot />
</main>

<Header />

<style>
  main {
    margin-top: 5rem;
  }
</style>
