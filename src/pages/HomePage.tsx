import { ExploreCard } from "../components/ExploreCard"
import imagePath from '../assets/8c66658910c081da7440d0b15db9a66a.jpeg';
import imagePath2 from '../assets/7359671ebfe1e09c73552ce832fd583e.jpeg';
import imagePath3 from '../assets/0c814fa334e1c038e5f40dfe120687f4.jpeg';
import navigationImg1 from '../assets/4491a644ea2b0549039f510c6a8321df.jpeg';
import navigationImg2 from '../assets/0cd23141c75c4929c05dc8d1322a35a8.jpeg';
import navigationImg3 from '../assets/7e5bcd5f5459137f6d4e984c8372c605.jpeg';
import navigationImg4 from '../assets/df18162ca8f2d2f6bb8d4b0b9844226a.jpeg';


export const HomePage = () => {
    return ( 
        <>
            <section className="home-page">
                <div className="home-page wrapper">
                    <h1>Find the Right Government Office. Instantly.</h1>
                    <p>Use CivicLink Navigator to explore Nigeria’s government structure and connect with the right officials at the federal, state, or local level.</p>
                    <div className="search-filter">
                        <div className="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08" />
    </svg>
                            <input type="text" placeholder="Search by name, issues, location" />
                        </div>
                        <button type="button" className="filter-button">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className="explore">
                <article className="intro">
                    <h1>What CivicLink Helps You Do</h1>
                    <p>Making it easier to find who’s responsible, and how to reach them.</p>
                </article>
                <div className="explore-cards">
                    <ExploreCard
                        image={imagePath}
                        heading="Understand Government Hierarchy"
                        subtitle="Interactive breakdown of how responsibilities are distributed."
                    />
                    <ExploreCard
                        image={imagePath2}
                        heading="Search by Location or Topic"
                        subtitle="Whether it's road repairs in Kano or school grants in Lagos, we help you find who’s responsible."
                    />
                    <ExploreCard
                        image={imagePath3}
                        heading="Access Verified Contacts"
                        subtitle="No more guessing. View official names, roles, and communication channels."
                    />
                    </div>
            </section>

            <section className="navigator">
                <div className="navigator-box">
                    <div className="photos">
                        <div className="first">
                            <img src={navigationImg1} alt="img 1" />
                            <img src={navigationImg2} alt="img 2" className="extra-height"/>
                        </div>
                        <div className="second">
                            <img src={navigationImg3} alt="img 3" />
                            <img src={navigationImg4} alt="img 4" />
                        </div>
                    </div>

                    <article className="navigate-text">
                        <h1>Why Choose CivicLink Navigator?</h1>
                        <p>CivicLink Navigator is the trusted tool for easily navigating Nigeria’s government landscape. With quick access to verified contacts and a user-friendly interface, we help you connect with the right officials, ensuring your civic needs are met with ease.</p>
                    </article>
                </div>
            </section>
        </>
        
    )
}