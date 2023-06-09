<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../UI/Button.svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty, isValidEmail } from "../helpers/validation";

  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let contactEmail = "";
  let description = "";

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: addressValid = !isEmpty(address);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: contactEmailValid = !isEmpty(contactEmail) && isValidEmail(contactEmail);
  $: descriptionValid = !isEmpty(description);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    addressValid &&
    imageUrlValid &&
    contactEmailValid &&
    descriptionValid;

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
      isValid={titleValid}
      validityMessage={"Please enter a valid title"}
      on:input={(ev) => (title = ev.target.value)}
    />
    <TextInput
      id={"subtitle"}
      label={"Subtitle"}
      value={subtitle}
      isValid={subtitleValid}
      validityMessage={"Please enter a valid subtitle"}
      on:input={(ev) => (subtitle = ev.target.value)}
    />
    <TextInput
      id={"address"}
      label={"Address"}
      value={address}
      isValid={addressValid}
      validityMessage={"Please enter a valid address"}
      on:input={(ev) => (address = ev.target.value)}
    />
    <TextInput
      id={"imageUrl"}
      label={"Image Url"}
      value={imageUrl}
      isValid={imageUrlValid}
      validityMessage={"Please enter a valid image URL"}
      on:input={(ev) => (imageUrl = ev.target.value)}
    />
    <TextInput
      id={"email"}
      label={"E-Mail"}
      value={contactEmail}
      type={"email"}
      isValid={contactEmailValid}
      validityMessage={"Please enter a valid email"}
      on:input={(ev) => (contactEmail = ev.target.value)}
    />
    <TextInput
      id={"description"}
      label={"Description"}
      type="textarea"
      isValid={descriptionValid}
      validityMessage={"Please enter a valid description"}
      bind:value={description}
    />
  </form>
  <div slot="footer">
    <Button on:click={() => dispatch("cancel")} mode="outline">Cancel</Button>
    <Button on:click={submitForm} disabled={!formIsValid}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
