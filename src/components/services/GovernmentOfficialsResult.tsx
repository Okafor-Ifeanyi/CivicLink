import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import OfficialCard from "./OfficialCard";

const GovernmentOfficialsResult: React.FC<{ filters: Array<string> }> = ({
  filters,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        Your Government Officials
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Government Services, Contact Information and structures based on your
        location.
      </p>

      <div className="mb-6">
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="search relative max-w-100 w-full">
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 size-5" />
            <Input
              type="search"
              placeholder="Still looking for something specific? Try searching..."
              className="w-full pl-8"
            />
          </div>
          <Button size="lg">Search</Button>
        </div>
      </div>

      <div className="flex gap-4">
        {filters.map((filter) => (
          <div key={filter}>{filter}</div>
        ))}
      </div>

      <div className="officials">
        <OfficialCard />
      </div>
    </div>
  );
};

export default GovernmentOfficialsResult;
