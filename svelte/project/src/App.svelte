<script>
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";

  let editMode = null;

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts to help you with your coding skills",
      imageUrl:
        "https://www.techrepublic.com/wp-content/uploads/2022/08/learn-coding-automation-just-770x513.jpeg",
      address: "Fake Street 123",
      contactEmail: "code@code.com",
      isFavorite: false,
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds",
      imageUrl:
        "https://d1s9j44aio5gjs.cloudfront.net/2020/09/Underwater-empty-pool.jpg",
      address: "742 Evergreen Terrace",
      contactEmail: "swim@swim.com",
      isFavorite: false,
    },
  ];

  const addMeetup = (details) => {
    const newMeetup = {
      id: Math.random().toString(),
      ...details,
    };

    meetups = [newMeetup, ...meetups];
    editMode = null;
  };

  const onToggleFavorite = (id) => {
    meetups = meetups.map((meetup) =>
      meetup.id === id ? { ...meetup, isFavorite: !meetup.isFavorite } : meetup
    );
  };

  const cancelEdit = () => (editMode = null);
</script>

<Header />

<main>
  <div class="meetup-controls">
    <Button on:click={() => (editMode = "add")}>New Meetup</Button>
  </div>
  {#if editMode === "add"}
    <EditMeetup
      on:savemeetup={(ev) => addMeetup(ev.detail)}
      on:cancel={cancelEdit}
    />
  {/if}
  <MeetupGrid
    {meetups}
    on:togglefavorite={(ev) => onToggleFavorite(ev.detail)}
  />
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>
