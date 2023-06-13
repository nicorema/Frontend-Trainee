import { writable } from "svelte/store";

const meetups = writable([
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
]);

const customMeetupStore = {
  subscribe: meetups.subscribe,
  addMeetup: (newMeetupData) => {
    const newMeetup = {
      id: Math.random().toString(),
      isFavorite: false,
      ...newMeetupData,
    };

    meetups.update((items) => [newMeetup, ...items]);
  },
  toggleFavorite: (id) => {
    meetups.update((items) =>
      items.map((meetup) =>
        meetup.id === id
          ? { ...meetup, isFavorite: !meetup.isFavorite }
          : meetup
      )
    );
  },
  updateMeetup: (id, updatedMeetupData) => {
    meetups.update((items) => {
      const updatedMeetupIndex = items.findIndex(
        ({ id: itemId }) => itemId === id
      );
      const updatedMeetup = {
        ...items[updatedMeetupIndex],
        ...updatedMeetupData,
      };
      const updatedMeetups = [...items];
      updatedMeetups[updatedMeetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  deleteMeetup: (id) => {
    meetups.update((items) => items.filter(({ id: itemId }) => itemId !== id));
  },
};

export default customMeetupStore;
