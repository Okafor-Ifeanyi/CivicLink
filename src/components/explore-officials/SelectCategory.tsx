import { useState } from "react";

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
        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Can't find your category? Try searching..."
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-[600px]"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-6 border border-gray-400 cursor-pointer rounded-lg hover:shadow-lg transition-shadow ${
              selectedCategory === category.title
                ? "bg-blue-50 border-primary shadow-md"
                : ""
            }`}
            onClick={() => handleSelect(category.title)}
          >
            <div className="flex flex-col items-center">
              <img
                src={category.icon}
                alt={category.title}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
              <p className="text-sm text-center text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
