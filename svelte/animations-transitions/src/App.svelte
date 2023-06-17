<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import Spring from "./Spring.svelte";
  import { fade, fly, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  let boxInput;
  let showParagraph = false;

  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxes = [];

  const addBox = () => {
    boxes = [boxInput, ...boxes];
  };

  const discardBox = (box) => {
    boxes = boxes.filter((el) => el !== box);
  };
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<button on:click={() => (showParagraph = !showParagraph)}>Toggle</button>
{#if showParagraph}
  <p in:fade out:fly={{ x: 300 }}>Can you see me?</p>
{/if}
<hr />

<input type="text" bind:value={boxInput} />
<button on:click={addBox}>Add</button>

{#if showParagraph}
  {#each boxes as box (box)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      transition:fly|local={{ x: 500, y: 1200 }}
      on:click={() => discardBox(box)}
      on:introstart={() => console.log("Adding element starts")}
      on:introend={() => console.log("Adding element ends")}
      on:outrostart={() => console.log("Removing element starts")}
      on:outroend={() => console.log("Removing element ends")}
      animate:flip={{ duration: 300 }}
    >
      {box}
    </div>
  {/each}
{/if}

<style>
  div {
    background: #ccc;
    width: 10rem;
    height: 10rem;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    padding: 1rem;
  }
</style>
