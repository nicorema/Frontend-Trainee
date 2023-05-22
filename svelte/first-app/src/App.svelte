<script>
  let name = "Nico";
  let age = 27;

  const incrementAge = () => (age += 1);
</script>

<h1>Hello {name}, my name is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>

<style>
  h1 {
    color: purple;
  }
</style>
