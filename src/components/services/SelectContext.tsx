import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectContext = () => {
  // Sample data - in a real app, this would come from an API or database
  const states = [
    { value: "california", label: "California" },
    { value: "new-york", label: "New York" },
    { value: "texas", label: "Texas" },
    { value: "florida", label: "Florida" },
  ];

  const jurisdictions = [
    { value: "city", label: "City" },
    { value: "county", label: "County" },
    { value: "state", label: "State" },
    { value: "federal", label: "Federal" },
  ];

  const positions = [
    { value: "mayor", label: "Mayor" },
    { value: "council-member", label: "Council Member" },
    { value: "governor", label: "Governor" },
    { value: "senator", label: "Senator" },
  ];

  const levels = [
    { value: "local", label: "Local" },
    { value: "regional", label: "Regional" },
    { value: "state", label: "State" },
    { value: "national", label: "National" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-2">
        Choose Your Context
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Help us narrow down which government office is responsible in your area.
        (All fields are optional)
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Jurisdiction</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a jurisdiction" />
            </SelectTrigger>
            <SelectContent>
              {jurisdictions.map((jurisdiction) => (
                <SelectItem key={jurisdiction.value} value={jurisdiction.value}>
                  {jurisdiction.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Government Position</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((position) => (
                <SelectItem key={position.value} value={position.value}>
                  {position.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Government Level</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectContext;
