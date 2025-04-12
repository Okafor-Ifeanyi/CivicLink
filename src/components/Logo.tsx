import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const CivicLinkLogo: React.FC<{
  mode?: "light" | "dark";
  className?: string;
}> = ({ mode = "light", className }) => {
  return (
    <div
      className={cn(
        "flex text-3xl font-extrabold",
        mode === "light" && "text-white",
        className
      )}
    >
      <Link
        to="/"
        className="logout"
        style={
          {
            background: `linear-gradient(94.74deg, ${
              mode === "light" ? "#142b75" : "#8a8feb"
            } 3.83%, ${mode === "light" ? "#1e40af" : "#5f84df"} 66.62%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          } as React.CSSProperties
        }
      >
        CivicLink
      </Link>
    </div>
  );
};

export default CivicLinkLogo;
