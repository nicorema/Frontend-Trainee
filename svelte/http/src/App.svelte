<script>
  import { onMount } from "svelte";
  import hobbyStore from "./hobby-store";

  let newHobby = "";
  let isLoading = false;

  const fetchHobbies = async () => {
    isLoading = true;
    try {
      const response = await fetch(
        "https://svelte-course-2efdc-default-rtdb.firebaseio.com/hobbies.json"
      );
      if (!response.ok) {
        throw new Error("Failed!");
      }

      const hobbiesData = await response.json();
      hobbyStore.setHobbies(Object.values(hobbiesData));
    } catch (err) {
      console.error(err);
    } finally {
      isLoading = false;
    }
  };

  // const getHobbies = fetch(
  //   "https://svelte-course-2efdc-default-rtdb.firebaseio.com/hobbies.json"
  // )
  //   .then((response) => {
  //     isLoading = true;
  //     if (!response.ok) {
  //       throw new Error("Failed!");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     isLoading = false;
  //     hobbies = Object.values(data);
  //     return hobbies;
  //   })

  //   .catch((err) => {
  //     isLoading = false;
  //     console.error(err);
  //   });

  const addHobby = async () => {
    hobbyStore.addHobby(newHobby);
    isLoading = true;
    try {
      const response = await fetch(
        "https://svelte-course-2efdc-default-rtdb.firebaseio.com/hobbies.json",
        {
          method: "POST",
          body: JSON.stringify(newHobby),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      isLoading = false;
      alert("Saved Data!");
    }
  };

  onMount(() => fetchHobbies());
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:value={newHobby} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby (hobby)}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}

<!-- {#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    {#each hobbyData as hobby (hobby)}
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await} -->
