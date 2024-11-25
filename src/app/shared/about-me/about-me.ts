import { Gallup } from "../gallup/gallup";
import { Fris } from "../fris/fris";

export interface AboutMe {
    details: string;
    gallup: Gallup[],
    fris: Fris;
}
