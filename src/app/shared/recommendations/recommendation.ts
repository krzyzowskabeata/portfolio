import { RecommendationType } from "./recommendation-type";

export interface Recommendation {
    id: number,
    author: string;
    title: string;
    img: string;
    link: string;
    type: RecommendationType;
}
