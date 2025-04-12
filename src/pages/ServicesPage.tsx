import { useState } from "react";
import SelectCategory from "../components/services/SelectCategory";
import { Button } from "../components/ui/button";
import SelectContext from "../components/services/SelectContext";
import GovernmentOfficialsResult from "../components/services/GovernmentOfficialsResult";

export const ServicesPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [filters, setFilters] = useState<{
    category: string | null;
    location: string | null;
  }>({
    category: null,
    location: null,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {currentStep === 1 && (
        <SelectCategory
          onSelect={(category) => setFilters({ ...filters, category })}
        />
      )}
      {currentStep === 2 && <SelectContext />}
      {currentStep === 3 && (
        <GovernmentOfficialsResult
          filters={Object.values(filters).filter(
            (filter): filter is string => filter !== null
          )}
        />
      )}

      {currentStep < 3 && (
        <div className="button-controls">
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
      )}
    </div>
  );
};
