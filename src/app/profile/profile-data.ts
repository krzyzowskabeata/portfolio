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
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        gallup: [
            {
                strength: `Naprawianie`,
                color: `#792481`,
                description: `Osoby, które wyróżnia cecha Naprawiania, dobrze radzą sobie z problemami. Są skuteczne w Znajdowaniu odpowiedzi na pytanieo to, co nie działa i jak to naprawić.`
            },
            {
                strength: `Dowodzenie`,
                color: `#e67402`,
                description: `Osoby, które wyróżnia cecha Dowodzenia, są zauważalne i wywierają wpływ na innych. Potrafią przejąć kontrolę nad sytuacją i podejmować decyzje.`
            },
            {
                strength: `Elastyczność`,
                color: `#026ec5`,
                description: `Osoby, które wyróżnia cecha Elastyczności, wolą „płynąć z prądem". Mają tendencje do bycia „ludźmi dnia dzisiejszego", którzy biorą rzeczy takimi, jakie są i przyszłość odkrywają dzień po dniu.`
            },
            {
                strength: `Odkrywczość`,
                color: `#02915c`,
                description: `Osoby, które wyróżnia cecha Odkrywczości, są zafascynowane pomystami i ideami. Potrafią odnaleźć związki pomiędzy zjawiskami, które z pozoru są catkowicie różne.`
            },
            {
                strength: `Poważanie`,
                color: `#d86d03`,
                description: `Osoby, które wyróżnia cecha Poważania, chcą, aby inni ludzie traktowali je z wielkim szacunkiem. Są niezależne i chcą być rozpoznawane.`
            }
        ],
        fris: {
            thinkingStyle: `Wizjoner`,
            actionStyle: `Gracz`,
            thinkingStyleColor: `#efa92d`,
            thinkingStyleShape: `circle`
        }
    };

    static recommendations: Recommendation[] = [
        {
            id: 1,
            author: `Richard Bach`,
            title: `Mewa`,
            img: `https://s.lubimyczytac.pl/upload/books/5102000/5102436/1126486-170x243.jpg`,
            link: `https://lubimyczytac.pl/ksiazka/5102436/mewa`,
            type: RecommendationType.BOOKS
        },
        {
            id: 2,
            author: `Daniel H. Pink`,
            title: `DRIVE. Kompletnie nowe spojrzenie na motywację`,
            img: `https://s.lubimyczytac.pl/upload/books/116000/116364/170x243.jpg`,
            link: `https://lubimyczytac.pl/ksiazka/116364/drive-kompletnie-nowe-spojrzenie-na-motywacje`,
            type: RecommendationType.BOOKS
        },
        {
            id: 3,
            author: `James Clear`,
            title: `Atomowe nawyki. Drobne zmiany, niezwykłe efekty`,
            img: `https://s.lubimyczytac.pl/upload/books/4898000/4898707/1067270-170x243.jpg`,
            link: `https://lubimyczytac.pl/ksiazka/4898707/atomowe-nawyki-drobne-zmiany-niezwykle-efekty`,
            type: RecommendationType.BOOKS
        },
        {
            id: 4,
            author: `@przemekgorczykpodcast`,
            title: `Przemek Górczyk Podcast`,
            img: `https://yt3.googleusercontent.com/SLseQhs5hC3L0TRDLJBuUgDjLw9Rk4WFAecwwvvgYkBi8me8e0OFZpKNX5EMS705EYzS0o_y0uY=s160-c-k-c0x00ffffff-no-rj`,
            link: `https://www.youtube.com/@przemekgorczykpodcast`,
            type: RecommendationType.PODCASTS
        },
        {
            id: 5,
            author: `@menedzerplus`,
            title: `Podcast Menedżer Plus | Mariusz Chrapko`,
            img: `https://yt3.googleusercontent.com/EI5PSL3TsFJBt-dw94dxxVFla_yGWCt0ypn4pFJNcAPa3LSZga0niSJ9-HczeCEVD4r7n4Em=s160-c-k-c0x00ffffff-no-rj`,
            link: `https://www.youtube.com/@menedzerplus`,
            type: RecommendationType.PODCASTS
        }
    ];

    static quote: Quote = {
        author: `Mahatma Gandhi`,
        content: `We must become the change we want to see`
    };

}
