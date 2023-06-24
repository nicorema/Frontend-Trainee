<script context="module">
  export async function preload(page) {
    try {
      const response = await this.fetch(
        "https://svelte-course-2efdc-default-rtdb.firebaseio.com/meetups.json/"
      );

      if (!response.ok) {
        throw new Error("An error ocurred, please try again");
      }

      const data = await response.json();
      const loadedMeetups = [];
      for (const key in data) {
        loadedMeetups.push({ ...data[key], id: key });
      }

      return { fetchedMeetups: loadedMeetups.reverse() };
    } catch (err) {
      this.error(500, "Could not fetch meetups");
    }
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import Button from "../components/UI/Button.svelte";
  import MeetupFilter from "../components/Meetups/MeetupFilter.svelte";
  import MeetupItem from "../components/Meetups/MeetupItem.svelte";
  import EditMeetup from "../components/Meetups/EditMeetup.svelte";
  import LoadingSpinner from "../components/UI/LoadingSpinner.svelte";
  import meetups from "../meetup-store";

  export let fetchedMeetups;

  let loadedMeetups = [];
  let editMode = null;
  let editedId = null;
  let isLoading;
  let unsubscribe;

  let favsOnly = false;

  $: filterMeetups = favsOnly
    ? loadedMeetups.filter(({ isFavorite }) => isFavorite)
    : loadedMeetups;

  const setFilter = (ev) => {
    favsOnly = ev.detail === "favorites";
  };

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };

  const startAdd = () => {
    editMode = "edit";
  };

  const startEdit = (ev) => {
    editMode = "edit";
    editedId = ev.detail;
  };

  onMount(() => {
    unsubscribe = meetups.subscribe((items) => (loadedMeetups = items));
    meetups.setMeetups(fetchedMeetups);
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<svelte:head>
  <title>All Meetups</title>
</svelte:head>

{#if editMode === "add" || editMode === "edit"}
  <EditMeetup on:cancel={cancelEdit} id={editedId} />
{/if}

{#if isLoading}
  <LoadingSpinner />
{:else}
  <section id="meetups-controls">
    <MeetupFilter on:select={setFilter} />
    <Button on:click={startAdd}>New Meetup</Button>
  </section>
  {#if filterMeetups.length === 0}
    <p id="no-meetups">No meetups found, you can start adding some</p>
  {/if}
  <section id="meetups">
    {#each filterMeetups as { title, subtitle, imageUrl, description, address, id, isFavorite } (id)}
      <div transition:scale animate:flip={{ duration: 600 }}>
        <MeetupItem
          on:showdetails
          on:edit={startEdit}
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
{/if}

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
