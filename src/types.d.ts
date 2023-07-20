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
    premiered: string;
}
export interface IGet {
   score: number;
   show: IShow;
}