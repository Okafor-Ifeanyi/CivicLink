import { ExploreCard } from "../components/ExploreCard";
import imagePath from "../assets/8c66658910c081da7440d0b15db9a66a.jpeg";
import imagePath2 from "../assets/7359671ebfe1e09c73552ce832fd583e.jpeg";
import imagePath3 from "../assets/0c814fa334e1c038e5f40dfe120687f4.jpeg";
import navigationImg1 from "../assets/4491a644ea2b0549039f510c6a8321df.jpeg";
import navigationImg2 from "../assets/0cd23141c75c4929c05dc8d1322a35a8.jpeg";
import navigationImg3 from "../assets/7e5bcd5f5459137f6d4e984c8372c605.jpeg";
import navigationImg4 from "../assets/df18162ca8f2d2f6bb8d4b0b9844226a.jpeg";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SearchIcon } from "lucide-react";

export const HomePage = () => {
  return (
    <>
      <section className="home-page">
        <div className="wrapper">
          <h1>Find the Right Government Office. Instantly.</h1>
          <p>
            Use CivicLink Navigator to explore Nigeria&apos;s government
            structure and connect with the right officials at the federal,
            state, or local level.
          </p>
          <div className="flex max-sm:flex-col gap-4">
            <div className="relative text-white">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
              <Input
                type="text"
                placeholder="Search by name, issues, location"
                className="w-96 placeholder:text-white pl-8"
              />
            </div>
            <Button type="button" variant="secondary" size="lg">
              Search
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto explore">
        <article className="intro mb-4 text-center">
          <h1 className="text-4xl font-bold">What CivicLink Helps You Do</h1>
          <p>
            Making it easier to find who&apos;s responsible, and how to reach
            them.
          </p>
        </article>
        <div className="explore-cards flex-wrap *:grow">
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

      <section className="px-4 py-10 navigator">
        <div className="container mx-auto flex gap-6 max-md:flex-col max-md:items-center">
          <div className="photos grow">
            <div className="first">
              <img src={navigationImg1} alt="img 1" />
              <img src={navigationImg2} alt="img 2" className="extra-height" />
            </div>
            <div className="second">
              <img src={navigationImg3} alt="img 3" />
              <img src={navigationImg4} alt="img 4" />
            </div>
          </div>

          <article className="navigate-text md:w-1/2 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold">
              Why Choose CivicLink Navigator?
            </h1>
            <p>
              CivicLink Navigator is the trusted tool for easily navigating
              Nigeria&apos;s government landscape. With quick access to verified
              contacts and a user-friendly interface, we help you connect with
              the right officials, ensuring your civic needs are met with ease.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};
