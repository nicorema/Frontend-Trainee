<script context="module">
  console.log("hola");

  let deactivatedNode;
</script>

<script>
  export let member;

  let isActive;

  const setAsActive = () => {
    if (deactivatedNode) {
      deactivatedNode();
    }
    isActive = true;
    deactivatedNode = setAsInactive;
  };

  const setAsInactive = () => {
    isActive = false;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={setAsActive} class:active={isActive}>
  <h1>{member.name}</h1>
  {#if member.isParent}
    {#each member.children as child}
      <svelte:self member={child} />
    {/each}
  {/if}
  <hr />
</div>

<style>
  div {
    margin-left: 2rem;
  }

  .active {
    color: red;
  }
</style>
