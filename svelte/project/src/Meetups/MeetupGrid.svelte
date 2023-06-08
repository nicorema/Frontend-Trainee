<script>
  import MeetupItem from "./MeetupItem.svelte";
  export let meetups;
</script>

<section id="meetups">
  {#each meetups as { title, subtitle, imageUrl, description, contactEmail, address, id, isFavorite } (id)}
    <MeetupItem
      {id}
      {title}
      {subtitle}
      {imageUrl}
      {description}
      {contactEmail}
      {address}
      {isFavorite}
      on:togglefavorite
    />
  {/each}
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
