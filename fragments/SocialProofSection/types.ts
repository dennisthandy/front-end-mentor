export type Rating = {
    point: number;
    label: string;
}

export type Review = {
    avatar: string;
    comment: string;
    name: string;
    alias: string;
}

export type Proof = {
    title: string;
    description: string;
    ratings: Rating[];
    reviews: Review[]
}
