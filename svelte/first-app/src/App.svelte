<script>
  import ContactCard from "./components/ContactCard.svelte";

  let name = "";
  let title = "";
  let description = "";
  let img = "";
</script>

<h1>Hello!</h1>
<!-- <input type="text" value={name} on:input={changeName} /> -->
<input type="text" placeholder="User Name" bind:value={name} />
<input type="text" placeholder="Job Title" bind:value={title} />
<textarea placeholder="Short description" rows="3" bind:value={description} />
<input type="text" placeholder="Profile picture" bind:value={img} />
<ContactCard
  userName={name}
  jobTitle={title}
  jobDescription={description}
  profilePicture={img}
/>

<style>
  h1 {
    color: purple;
  }
</style>
