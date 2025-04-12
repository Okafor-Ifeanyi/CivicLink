import { useState } from "react";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Loader2 } from "lucide-react";
import { ComboBox } from "../components/ui/combo-box";
import { OfficialFieldFilter } from "../types/official.type";
import {
  useCategories,
  useStates,
  usePositions,
  useLevels,
} from "../services/hooks/use-official-fields";
import { Button } from "../components/ui/button";
import SearchOfficials from "../components/contact/SearchOfficials";

export const ContactPage = () => {
  const [filters, setFilters] = useState<OfficialFieldFilter>({
    state: "",
    jurisdiction: "",
    position: "",
    level: "",
  });
  const { states, isStatesLoading, statesError } = useStates();
  const { positions, isPositionsLoading, positionsError } = usePositions();
  const { levels, isLevelsLoading, levelsError } = useLevels();
  const { categories, isCategoriesLoading, categoriesError } = useCategories();

  const [startSearch, setStartSearch] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="contact-page">
      <section className="contact">
        <div className="header text-center">
          <h1>Contact Government Officials</h1>
          <p>
            Connect directly with elected representatives and public servants
            across all levels of Nigerian government.
          </p>
        </div>
      </section>

      <section className="contact-details">
        <div className="space-y-6 w-full">
          <div className="issue space-y-2">
            <label className="text-sm font-medium">Issue (Required)</label>
            <Select
              onValueChange={(value) => handleFilterChange("category", value)}
              value={filters.category}
            >
              <SelectTrigger className="w-full capitalize">
                <SelectValue placeholder="Select issue" />
              </SelectTrigger>
              <SelectContent>
                {isCategoriesLoading ? (
                  <SelectItem
                    value="loading"
                    className="justify-center"
                    disabled
                  >
                    <Loader2 className="animate-spin text-primary size-4" />
                  </SelectItem>
                ) : categoriesError ? (
                  <SelectItem
                    value="error"
                    className="text-red-500 text-center"
                    disabled
                  >
                    Error loading issue: {categoriesError}
                  </SelectItem>
                ) : (
                  categories?.map((category) => (
                    <SelectItem
                      key={category._id}
                      value={category.name}
                      className="capitalize"
                    >
                      {category.name.replace(/-/g, " ")}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="government-level space-y-2">
            <label className="text-sm font-medium">Government Level</label>
            <Select
              onValueChange={(value) => handleFilterChange("level", value)}
              value={filters.level}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a level" />
              </SelectTrigger>
              <SelectContent>
                {isLevelsLoading ? (
                  <SelectItem
                    value="loading"
                    className="justify-center"
                    disabled
                  >
                    <Loader2 className="animate-spin text-primary size-4" />
                  </SelectItem>
                ) : levelsError ? (
                  <SelectItem
                    value="error"
                    className="text-red-500 text-center"
                    disabled
                  >
                    Error loading government levels
                  </SelectItem>
                ) : (
                  levels?.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="state-region flex flex-col gap-2 *:grow">
            <label className="text-sm font-medium">State/Region</label>
            <ComboBox
              items={states?.map((state) => ({
                label: state,
                value: state,
              }))}
              isLoading={isStatesLoading}
              error={statesError}
              placeholder="Select State"
              popoverContentProps={{
                align: "start",
              }}
              onChange={(value) => handleFilterChange("state", value)}
            />
          </div>

          <div className="department-position flex flex-col gap-2 *:grow">
            <label className="text-sm font-medium">Ministry/Department</label>
            <ComboBox
              items={positions?.map((position) => ({
                label: position,
                value: position,
              }))}
              isLoading={isPositionsLoading}
              error={positionsError}
              placeholder="Select Position"
              popoverContentProps={{
                align: "start",
              }}
              onChange={(value) => handleFilterChange("position", value)}
            />
          </div>
        </div>
        <div className="official-search">
          <Button
            className="search-officials"
            disabled={!filters.category}
            onClick={() => setStartSearch(true)}
          >
            Search Officials
          </Button>
        </div>
      </section>

      {startSearch && <SearchOfficials filters={filters} />}
    </div>
  );
};
