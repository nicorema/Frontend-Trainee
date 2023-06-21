<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import meetups from "./Meetups/meetup-store";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";
  import { onMount } from "svelte";
  import LoadingSpinner from "./UI/LoadingSpinner.svelte";
  import Error from "./UI/Error.svelte";

  let editMode = null;
  let editedId = null;
  let page = "overview";
  let pageData = {};
  let isLoading = true;
  let error;

  onMount(async () => {
    try {
      const response = await fetch(
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
      meetups.setMeetups(loadedMeetups.reverse());
    } catch (err) {
      error = err;
    } finally {
      isLoading = false;
    }
  });

  const cancelEdit = () => {
    editMode = null;
    editedId = null;
  };
  const showDetails = (ev) => {
    page = "details";
    pageData.id = ev.detail;
  };
  const showOverview = () => {
    page = "overview";
    pageData.id = {};
  };

  const startEdit = (ev) => {
    editMode = "edit";
    editedId = ev.detail;
  };
</script>

{#if error}
  <Error message={error.message} on:cancel={() => (error = null)} />
{/if}

<Header />

<main>
  {#if page === "overview"}
    {#if editMode === "add" || editMode === "edit"}
      <EditMeetup on:cancel={cancelEdit} id={editedId} />
    {/if}

    {#if isLoading}
      <LoadingSpinner />
    {/if}
    <MeetupGrid
      meetups={$meetups}
      on:showdetails={showDetails}
      on:edit={startEdit}
      on:add={() => (editMode = "add")}
    />
  {:else if page === "details"}
    <MeetupDetail id={pageData.id} on:close={showOverview} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
