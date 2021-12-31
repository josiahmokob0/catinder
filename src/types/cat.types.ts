export type Cat = {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Vote = {
  image_id: string;
  sub_id: string;
  value: number;
  url?: string;
  id?: string;
};

export type Image = {
  imageId: string;
  url: string;
};

export type Votes = {
  liked: Image[];
  disliked: Image[];
};
