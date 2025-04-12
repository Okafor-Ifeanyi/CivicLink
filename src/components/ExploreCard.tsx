import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ExploreCardProps {
  image: string;
  heading: string;
  subtitle: string;
}

export const ExploreCard = ({ image, heading, subtitle }: ExploreCardProps) => {
  return (
    <div className="card shadow-md">
      <img src={image} alt={heading} className="" />
      <article>
        <h2 className="">{heading}</h2>
        <p className="">{subtitle}</p>
        <Button asChild>
          <Link to="/explore-officials">Explore</Link>
        </Button>
      </article>
    </div>
  );
};
