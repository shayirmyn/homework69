type RATING = {
    average: number;
}

type IMAGE = {
    original: string,
}

type SHOW = {
    id: number;
    name: string;
    genres: string[];
    runtime: number;
    rating: RATING;
    image: IMAGE;
}
export interface IGet {
   score: number;
   show: SHOW;
}