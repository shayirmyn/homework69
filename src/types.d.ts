type RATING = {
    average: number;
}

type IMAGE = {
    original: string;
    medium: string,
}

export interface IShow {
    id: number;
    name: string;
    genres: string[];
    runtime: number;
    rating: RATING;
    image: IMAGE;
}
export interface IGet {
   score: number;
   show: IShow;
}