import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const categories = [
  {
    title: "governance-and-representation",
    description:
      "Government officials responsible for policy-making, administration, and representation at various levels of government",
    icon: "/icons/governance.svg",
  },
  {
    title: "taxes-and-levies",
    description:
      "Officials handling tax collection, revenue generation, and financial regulations",
    icon: "/icons/taxes.svg",
  },
  {
    title: "health-services",
    description:
      "Officials managing healthcare systems, medical facilities, and public health initiatives",
    icon: "/icons/health.svg",
  },
  {
    title: "education",
    description:
      "Officials overseeing educational institutions, policies, and academic programs",
    icon: "/icons/education.svg",
  },
  {
    title: "markets-and-small-business",
    description:
      "Officials regulating commerce, trade, and supporting small business development",
    icon: "/icons/business.svg",
  },
  {
    title: "roads-and-infrastructure",
    description:
      "Officials managing transportation networks, public works, and infrastructure development",
    icon: "/icons/infrastructure.svg",
  },
  {
    title: "public-safety-and-security",
    description:
      "Officials responsible for law enforcement, security, and public safety measures",
    icon: "/icons/security.svg",
  },
  {
    title: "social-services",
    description:
      "Officials providing social welfare programs and community support services",
    icon: "/icons/social.svg",
  },
  {
    title: "electricity-and-power",
    description:
      "Officials managing power generation, distribution, and energy infrastructure",
    icon: "/icons/electricity.svg",
  },
  {
    title: "water-and-sanitation",
    description:
      "Officials overseeing water supply, sanitation systems, and public utilities",
    icon: "/icons/water.svg",
  },
  {
    title: "jobs-and-youth-empowerment",
    description:
      "Officials handling employment programs and youth development initiatives",
    icon: "/icons/jobs.svg",
  },
  {
    title: "housing-and-urban-planning",
    description:
      "Officials managing housing projects and urban development planning",
    icon: "/icons/housing.svg",
  },
];

const SelectCategory: React.FC<{ onSelect?: (value: string) => void }> = ({
  onSelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    onSelect?.(category);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        What Do You Need Help With?
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Select a category to find the right government office.
      </p>

      <div className="mb-6">
        <div className="flex gap-2 flex-wrap justify-center *:grow">
          <div className="search relative max-w-100 w-full">
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 size-5" />
            <Input
              type="search"
              placeholder="Can't find your category? Try searching..."
              className="w-full pl-8"
            />
          </div>
          <Button size="lg">Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            className={`cursor-pointer hover:shadow-lg transition-shadow ${
              selectedCategory === category.title
                ? "bg-blue-50 border-primary shadow-md"
                : ""
            }`}
            onClick={() => handleSelect(category.title)}
          >
            <CardContent className="flex flex-col items-center h-full p-6">
              <img
                src={category.icon}
                alt={category.title}
                className="w-16 h-16 mb-4"
              />
              <CardTitle className="text-lg mb-2 text-center capitalize">
                {category.title.replace(/-/g, " ").replace(/and/g, "&")}
              </CardTitle>
              <CardDescription className="text-center my-auto">
                {category.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
