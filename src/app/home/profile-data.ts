import { Profile } from "./profile";
import { ProfileDetails } from "./profile-details";

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

    static profileDetails: ProfileDetails = {
        aboutMe: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. orem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    };

}
