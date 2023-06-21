import { writable } from "svelte/store";

const meetups = writable([]);

const customMeetupStore = {
  subscribe: meetups.subscribe,
  setMeetups: (meetupsData) => meetups.set(meetupsData),
  addMeetup: (newMeetupData) => {
    meetups.update((items) => [newMeetupData, ...items]);
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
