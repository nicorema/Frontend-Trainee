<script>
  import CartItem from "./CartItem.svelte";
  import FamilyNode from "./FamilyNode.svelte";
  import Product from "./Product.svelte";

  let y;
  let currentTitle = "Special Elements";

  $: console.log(y);

  let familyStructure = [
    {
      isParent: true,
      name: "Chris",
      children: [
        {
          isParent: true,
          name: "Moe",
          children: [{ isParent: false, name: "Julie" }],
        },
      ],
    },
    { isParent: false, name: "Anna" },
  ];

  let renderedComponent = { cmp: Product, title: "Test Product", id: "p1" };

  const toggle = () => {
    if (renderedComponent === Product) {
      renderedComponent = { cmp: CartItem, title: "Test Product", id: "p1" };
    } else {
      renderedComponent = { cmp: Product, title: "Another Product", id: "p2" };
    }
  };

  const switchTitle = () => {
    const wordLength = Math.floor(Math.random() * 10) + 1;
    let word = "";
    const possibleCharacters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      word += possibleCharacters[randomIndex];
    }

    currentTitle = word;
  };
</script>

<svelte:window bind:scrollY={y} />
<!-- svelte-ignore avoid-mouse-events-on-document -->
<svelte:document on:mouseenter />
<svelte:head>
  <title>{currentTitle}</title>
</svelte:head>

<button on:click={switchTitle}>Switch Title</button>

<div>
  <button on:click={toggle}>Toggle Display</button>
  <svelte:component
    this={renderedComponent.cmp}
    title={renderedComponent.title}
    id={renderedComponent.id}
  />

  {#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
  {/each}
</div>

<style>
  div {
    height: 3000px;
  }
</style>
