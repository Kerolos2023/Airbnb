export type cardItem = {
    img: string;
    price: string;
    rating: string;
}
export type gitliveitem = {
    img:string;
    title:string;
}

export type ListingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type carddata = cardItem[];
export type gitlivedata = gitliveitem[];
export type SearchResultData = ListingCardItem[];