<script>
  export let content;
</script>

<h1 class:red={content.includes("!")}>{content}</h1>

<style>
  .red {
    color: red;
  }
</style>
