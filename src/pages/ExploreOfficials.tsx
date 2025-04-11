import { useState } from "react";
import SelectCategory from "../components/explore-officials/SelectCategory";

const ExploreOfficials = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [filters, setFilters] = useState<{
    category: string | null;
    location: string | null;
  }>({
    category: null,
    location: null,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <SelectCategory
        onSelect={(category) => setFilters({ ...filters, category })}
      />

      <div className="button-controls">
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-6 py-2 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-50"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreOfficials;
