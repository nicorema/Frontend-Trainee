<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let contactEmail = "";
  let description = "";

  const dispatch = createEventDispatcher();

  const submitForm = () => {
    dispatch("savemeetup", {
      title,
      subtitle,
      address,
      imageUrl,
      contactEmail,
      description,
    });
  };
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id={"title"}
      label={"Title"}
      value={title}
      on:input={(ev) => (title = ev.target.value)}
    />
    <TextInput
      id={"subtitle"}
      label={"Subtitle"}
      value={subtitle}
      on:input={(ev) => (subtitle = ev.target.value)}
    />
    <TextInput
      id={"address"}
      label={"Address"}
      value={address}
      on:input={(ev) => (address = ev.target.value)}
    />
    <TextInput
      id={"imageUrl"}
      label={"Image Url"}
      value={imageUrl}
      on:input={(ev) => (imageUrl = ev.target.value)}
    />
    <TextInput
      id={"email"}
      label={"E-Mail"}
      value={contactEmail}
      type={"email"}
      on:input={(ev) => (contactEmail = ev.target.value)}
    />
    <TextInput
      id={"description"}
      label={"Description"}
      value={description}
      type="textarea"
      on:input={(ev) => (description = ev.target.value)}
    />
  </form>
  <div slot="footer">
    <Button on:click={() => dispatch("cancel")} mode="outline">Cancel</Button>
    <Button on:click={submitForm}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
