<script context="module">
  export async function preload(page) {
    const { id } = page.params;

    try {
      const response = await this.fetch(
        `https://svelte-course-2efdc-default-rtdb.firebaseio.com/meetups/${id}.json/`
      );

      if (!response.ok) {
        throw new Error("An error ocurred, please try again");
      }

      const data = await response.json();

      if (!data) {
        throw new Error();
      }

      return { loadedMeetup: { ...data, id } };
    } catch (err) {
      this.error(500, `Could not fetch meetup: ${id}`);
    }
  }
</script>

<script>
  import Button from "../components/UI/Button.svelte";

  export let loadedMeetup;
</script>

<section>
  <div class="image">
    <img src={loadedMeetup?.imageUrl} alt={loadedMeetup?.title} />
  </div>
  <div class="content">
    <h1>{loadedMeetup?.title}</h1>
    <h1>{loadedMeetup?.subtitle} - {loadedMeetup?.address}</h1>
    <p>{loadedMeetup?.description}</p>
    <Button href="mailto:{loadedMeetup?.contactEmail}">Contact</Button>
    <Button type="button" mode="outline" href="/">Close</Button>
  </div>
</section>

<style>
  section {
    margin-top: 4rem;
  }

  .image {
    width: 100%;
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image {
    background: #e7e7e7;
  }

  .content {
    text-align: center;
    width: 80%;
    margin: auto;
  }

  h1 {
    font-size: 2rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
  }

  p {
    font-size: 1.5rem;
  }
</style>
