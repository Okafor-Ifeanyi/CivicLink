import { ExploreCard } from "../components/ExploreCard"
import imagePath from '../assets/8c66658910c081da7440d0b15db9a66a.jpeg';
import imagePath2 from '../assets/7359671ebfe1e09c73552ce832fd583e.jpeg';
import imagePath3 from '../assets/0c814fa334e1c038e5f40dfe120687f4.jpeg';

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
        </>
        
    )
}