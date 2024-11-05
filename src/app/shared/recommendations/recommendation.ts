import { RecommendationType } from "./recommendation-type";

export interface Recommendation {
    id: number,
    author: string;
    title: string;
    type: RecommendationType;
}
