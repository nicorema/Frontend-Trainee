<script>
  import Content from "./Content.svelte";

  let value = "";
</script>

<h1>Resolution</h1>

<input type="text" bind:value />
<Content content={value} />
