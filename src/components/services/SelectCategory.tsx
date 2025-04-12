import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, SearchIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { useCategories } from "../../services/hooks/use-official-fields";
import { Category } from "../../types/official.type";

const SelectCategory: React.FC<{
  onSelect?: (value: string) => void;
  stepControls?: React.ReactNode;
}> = ({ onSelect, stepControls }) => {
  const { categories, isCategoriesLoading, categoriesError } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    onSelect?.(category);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-center mb-2">
        What Do You Need Help With?
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Select a category to find the right government office.
      </p>

      <div className="flex gap-2 flex-wrap justify-center">
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

      <div className="my-3">{stepControls}</div>

      {isCategoriesLoading ? (
        <Loader2 className="animate-spin text-primary mx-auto size-10 block" />
      ) : categoriesError ? (
        <div className="text-red-500 text-center">
          Error loading categories. Please try again
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories!.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              isSelected={selectedCategory === category.name}
              image={`/icons/${category.name}.svg`}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryCard: React.FC<{
  category: Category;
  isSelected: boolean;
  image: string;
  onSelect: (category: string) => void;
}> = ({ category, isSelected, image, onSelect }) => {
  return (
    <Card
      className={`cursor-pointer hover:shadow-lg transition-shadow ${
        isSelected ? "bg-blue-50 border-primary shadow-md" : ""
      }`}
      onClick={() => onSelect(category.name)}
    >
      <CardContent className="flex flex-col items-center h-full p-6">
        <img src={image} alt={category.name} className="w-16 h-16 mb-4" />
        <CardTitle className="text-lg mb-2 text-center capitalize">
          {category.name.replace(/-/g, " ").replace(/and/g, "&")}
        </CardTitle>
        <CardDescription className="text-center my-auto">
          {category.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SelectCategory;
