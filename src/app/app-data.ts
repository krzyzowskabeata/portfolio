import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile } from './home/profile';
import { ProfileData } from './home/profile-data';
import { ProfileDetails } from './home/profile-details';

export class AppData implements InMemoryDbService {

    createDb(): { profile: Profile, profileDetails: ProfileDetails } {
        const profile = ProfileData.profile;
        const profileDetails = ProfileData.profileDetails;
        return { profile, profileDetails };
    }
}
