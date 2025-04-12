import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Input } from "../ui/input";
import { ChevronLeft, Loader2, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import OfficialCard, { OfficialCardSkeleton } from "./OfficialCard";
import { OfficialFieldFilter } from "../../types/official.type";
import { useOfficials } from "../../services/hooks/use-official";
import { useSearchParams } from "react-router-dom";

const GovernmentOfficialsResult: React.FC<{
  filters: OfficialFieldFilter;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}> = ({ filters, setCurrentStep }) => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { officials, isOfficialsLoading, officialsError } = useOfficials({
    ...filters,
    search,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        Your Government Officials
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Government Services, Contact Information and structures based on your
        location.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(searchInputRef.current?.value || "");
        }}
        className="mb-4"
      >
        <div className="flex gap-2 flex-wrap justify-center">
          <div className="search relative max-w-100 w-full">
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 size-5" />
            <Input
              type="search"
              placeholder="Still looking for something specific? Try searching..."
              className="w-full pl-8"
              defaultValue={search}
              ref={searchInputRef}
            />
          </div>
          <Button size="lg" disabled={isOfficialsLoading || !search}>
            {isOfficialsLoading && <Loader2 className="size-4 animate-spin" />}
            {isOfficialsLoading ? "Searching..." : "Search"}
          </Button>
        </div>
      </form>

      <div className="flex items-end mb-6">
        <Button variant="link" onClick={() => setCurrentStep(1)}>
          <ChevronLeft />
          Edit filters
        </Button>
        <div className="flex justify-center items-center gap-4 mx-auto">
          {[...Object.values(filters), search].filter(Boolean).map((filter) => (
            <div
              key={filter}
              className="bg-[#C4EEE9] px-4 py-2 rounded-full capitalize"
            >
              {filter}
            </div>
          ))}
        </div>
      </div>

      <div className="officials">
        {isOfficialsLoading ? (
          <OfficialCardSkeleton />
        ) : officialsError ? (
          <p className="text-center text-red-600">Error fetching officials</p>
        ) : officials?.length === 0 ? (
          <p className="text-center text-gray-600">No officials found</p>
        ) : (
          officials?.map((official) => (
            <OfficialCard key={official._id} official={official} />
          ))
        )}
      </div>
    </div>
  );
};

export default GovernmentOfficialsResult;
