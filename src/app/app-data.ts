import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile } from './profile/profile';
import { ProfileData } from './profile/profile-data';
import { AboutMe } from './shared/about-me/about-me';
import { Quote } from './shared/quote/quote';
import { Recommendation } from './shared/recommendations/recommendation';

export class AppData implements InMemoryDbService {

    createDb(): { profile: Profile, aboutMe: AboutMe, recommendations: Recommendation[], quote: Quote } {
        const profile = ProfileData.profile;
        const aboutMe = ProfileData.aboutMe;
        const recommendations = ProfileData.recommendations;
        const quote = ProfileData.quote;
        return { profile, aboutMe, recommendations, quote };
    }
}
