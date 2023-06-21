<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import MeetupItem from "./MeetupItem.svelte";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  export let meetups;

  const dispatch = createEventDispatcher();

  let favsOnly = false;
  $: filterMeetups = favsOnly
    ? meetups.filter(({ isFavorite }) => isFavorite)
    : meetups;

  const setFilter = (ev) => {
    favsOnly = ev.detail === "favorites";
  };
</script>

<section id="meetups-controls">
  <MeetupFilter on:select={setFilter} />
  <Button on:click={() => dispatch("add")}>New Meetup</Button>
</section>
{#if filterMeetups.length === 0}
  <p id="no-meetups">No meetups found, you can start adding some</p>
{/if}
<section id="meetups">
  {#each filterMeetups as { title, subtitle, imageUrl, description, address, id, isFavorite } (id)}
    <div transition:scale animate:flip={{ duration: 600 }}>
      <MeetupItem
        on:showdetails
        on:edit
        {id}
        {title}
        {subtitle}
        {imageUrl}
        {description}
        {address}
        {isFavorite}
      />
    </div>
  {/each}
</section>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetups-controls {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }

  #no-meetups {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
