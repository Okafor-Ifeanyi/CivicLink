interface ExploreCardProps {
    image: string;
    heading: string;
    subtitle: string;
}

export const ExploreCard = ({ image, heading, subtitle }: ExploreCardProps) => {
    return (
        <div className="card">
            <img src={image} alt={heading} className="" />
            <article>
                <h2 className="">{heading}</h2>
                <p className="">{subtitle}</p>
                <button className="explore-button">
                    Explore
                </button>
            </article>
            

        </div>
    );
};