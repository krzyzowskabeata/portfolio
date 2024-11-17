import { Profile } from "./profile";
import { RecommendationType } from "../shared/recommendations/recommendation-type";
import { Recommendation } from "../shared/recommendations/recommendation";
import { AboutMe } from "../shared/about-me/about-me";
import { Quote } from "../shared/quote/quote";

export class ProfileData {

    static profile: Profile = {
        title: 'Dominik Dobry',
        subtitle: 'Agile coach',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        email: 'gsr.ddobry@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dominik-dobry'
    };

    static aboutMe: AboutMe = {
        details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. orem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    };

    static recommendations: Recommendation[] = [
        {
            id: 1,
            author: 'Lorem Ipsum',
            title: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            type: RecommendationType.BOOKS
        },
        {
            id: 2,
            author: 'Lorem Ipsum',
            title: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            type: RecommendationType.BOOKS
        },
        {
            id: 3,
            author: 'Lorem Ipsum',
            title: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
            type: RecommendationType.PODCASTS
        }
    ];

    static quote: Quote = {
        author: 'Mahatma Gandhi',
        content: 'We must become the change we want to see'
    };

}
