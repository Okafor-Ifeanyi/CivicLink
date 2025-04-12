import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface ExploreCardProps {
  image: string;
  heading: string;
  subtitle: string;
  className?: string;
}

export const ExploreCard = ({
  image,
  heading,
  subtitle,
  className,
}: ExploreCardProps) => {
  return (
    <div className={cn("card shadow-md", className)}>
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
