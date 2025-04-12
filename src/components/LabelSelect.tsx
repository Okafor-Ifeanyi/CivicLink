import React from "react";

interface LabeledSelectProps {
  label: string;
  disabledOption: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const LabeledSelect: React.FC<LabeledSelectProps> = ({
  label,
  disabledOption,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="labeled-select">
      <label className="labeled-select__label">{label}</label>
      <select
        className="labeled-select__select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          {disabledOption}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabeledSelect;