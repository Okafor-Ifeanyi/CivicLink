import { useState } from "react";
import {
  useJurisdictions,
  useLevels,
  usePositions,
  useStates,
} from "../../services/hooks/use-official-fields";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ComboBox } from "../ui/combo-box";
import { Loader2 } from "lucide-react";
import { OfficialFieldFilter } from "../../types/official.type";

const SelectContext = ({
  onFilterChange,
}: {
  onFilterChange: (filters: OfficialFieldFilter) => void;
}) => {
  const { states, isStatesLoading, statesError } = useStates();
  const { jurisdictions, isJurisdictionsLoading, jurisdictionsError } =
    useJurisdictions();
  const { positions, isPositionsLoading, positionsError } = usePositions();
  const { levels, isLevelsLoading, levelsError } = useLevels();

  const [filters, setFilters] = useState<OfficialFieldFilter>({
    state: "",
    jurisdiction: "",
    position: "",
    level: "",
  });

  const handleChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
    onFilterChange(filters);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl animate-in fade-in duration-300">
      <h1 className="text-3xl font-bold text-center mb-2">
        Choose Your Context
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Help us narrow down which government office is responsible in your area.
        (All fields are optional)
      </p>

      <div className="space-y-6">
        <div className="flex flex-col gap-2 *:grow">
          <label className="text-sm font-medium">State</label>
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
            onChange={(value) => handleChange("state", value)}
          />
        </div>

        <div className="flex flex-col gap-2 *:grow">
          <label className="text-sm font-medium">Jurisdiction</label>
          <ComboBox
            items={jurisdictions?.map((jurisdiction) => ({
              label: jurisdiction,
              value: jurisdiction,
            }))}
            isLoading={isJurisdictionsLoading}
            error={jurisdictionsError}
            placeholder="Select Jurisdiction"
            popoverContentProps={{
              align: "start",
            }}
            onChange={(value) => handleChange("jurisdiction", value)}
          />
        </div>

        <div className="flex flex-col gap-2 *:grow">
          <label className="text-sm font-medium">Government Position</label>
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
            onChange={(value) => handleChange("position", value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Government Level</label>
          <Select
            onValueChange={(value) => handleChange("level", value)}
            value={filters.level}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a level" />
            </SelectTrigger>
            <SelectContent>
              {isLevelsLoading ? (
                <SelectItem value="loading" className="justify-center" disabled>
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
      </div>
    </div>
  );
};

export default SelectContext;
