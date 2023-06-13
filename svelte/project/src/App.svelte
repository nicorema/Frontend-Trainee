<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import meetups from "./Meetups/meetup-store";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

  let editMode = null;
  let editedId = null;
  let page = "overview";
  let pageData = {};

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

<Header />

<main>
  {#if page === "overview"}
    {#if editMode === "add" || editMode === "edit"}
      <EditMeetup on:cancel={cancelEdit} id={editedId} />
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
