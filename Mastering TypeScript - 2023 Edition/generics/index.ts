const numberIdentity = (item: number): number => {
  return item;
};
const booleanIdentity = (item: boolean): boolean => {
  return item;
};

const stringIdentity = (item: string): string => {
  return item;
};

const identity = <T>(item: T): T => {
  return item;
};

identity<string>("hey");
identity<number>(1);
identity<boolean>(true);

const getRandomElement = <T>(list: T[]): T => {
  return list[Math.floor(Math.random() * list.length)];
};

getRandomElement<number>([1, 2]);
getRandomElement(["a", "b"]);

const merge = <T extends object, U extends object>(object1: T, object2: U) => {
  return {
    ...object1,
    ...object2,
  };
};

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });

interface Lengthy {
  length: number;
}

const printDoubleLength = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2;
};

const makeEmptyList = <T = number>(): T[] => {
  return [];
};

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongPlaylist {
  public videos: Song[] = [];
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();
