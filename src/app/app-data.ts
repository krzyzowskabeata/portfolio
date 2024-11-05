import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile } from './profile/profile';
import { ProfileData } from './profile/profile-data';
import { AboutMe } from './shared/about-me/about-me';
import { Recommendation } from './shared/recommendations/recommendation';

export class AppData implements InMemoryDbService {

    createDb(): { profile: Profile, aboutMe: AboutMe, recommendations: Recommendation[] } {
        const profile = ProfileData.profile;
        const aboutMe = ProfileData.aboutMe;
        const recommendations = ProfileData.recommendations;
        return { profile, aboutMe, recommendations };
    }
}
