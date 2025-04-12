import { useState } from "react";
import SelectCategory from "../components/services/SelectCategory";
import { Button } from "../components/ui/button";
import SelectContext from "../components/services/SelectContext";
import GovernmentOfficialsResult from "../components/services/GovernmentOfficialsResult";
import { OfficialFieldFilter } from "../types/official.type";
import { useSearchParams } from "react-router-dom";

export const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(
    Number(searchParams.get("step")) || 1
  );
  const [filters, setFilters] = useState<OfficialFieldFilter>({
    category: searchParams.get("category") ?? "",
    state: searchParams.get("state") ?? "",
    jurisdiction: searchParams.get("jurisdiction") ?? "",
    position: searchParams.get("position") ?? "",
    level: searchParams.get("level") ?? "",
  });

  const stepControls = (
    <div className="button-controls animate-in fade-in duration-300">
      <div className="flex justify-end gap-4 mt-8">
        <Button
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(currentStep - 1)}
          variant="outline"
        >
          Back
        </Button>
        <Button onClick={() => setCurrentStep(currentStep + 1)}>
          Continue
        </Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {currentStep === 1 && (
        <SelectCategory
          onSelect={(category) => setFilters({ ...filters, category })}
          stepControls={filters.category ? stepControls : null}
        />
      )}
      {currentStep === 2 && (
        <SelectContext
          onFilterChange={(filters) => setFilters({ ...filters })}
        />
      )}
      {currentStep === 3 && (
        <GovernmentOfficialsResult
          setCurrentStep={setCurrentStep}
          filters={filters}
        />
      )}

      {currentStep < 3 && stepControls}
    </div>
  );
};
