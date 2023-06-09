<script>
  export let val = "";

  export const empty = () => {
    val = "";
  };
</script>

<input type="text" bind:value={val} />
