/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type ViewDetail = {
  age: number;
  region: string;
  date: string;
};

export type Video = {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
};

// interface ViewDetail {
//   age: number;
//   region: string;
//   date: string;
// }

// interface Video {
//   title: string;
//   author: string;
//   id: string;
//   viewDetails: ViewDetail[];
// }
