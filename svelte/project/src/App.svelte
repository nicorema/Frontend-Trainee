<script>
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import Button from "./UI/Button.svelte";
  import Header from "./UI/Header.svelte";
  import TextInput from "./UI/TextInput.svelte";
  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let contactEmail = "";
  let description = "";

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
    },
  ];

  const addMeetup = () => {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail,
    };

    meetups = [newMeetup, ...meetups];
  };
</script>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
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
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
