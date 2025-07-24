import "./CriterionSelector.css";

interface Option {
  id: number | string;
  name: string;
}

type BooleanGroup = { [key: string]: boolean };

interface CriterionSelectorProps<T> {
  title: string;
  options: Option[];
  selectedOptions: T;
  onChange: (value: T) => void;
  isBooleanGroup?: boolean;
}

const CriterionSelector = <T extends BooleanGroup | (number | string)[]>({
  title,
  options,
  selectedOptions,
  onChange,
  isBooleanGroup = false,
}: CriterionSelectorProps<T>) => {
  const handleChange = (id: number | string) => {
    if (isBooleanGroup && !Array.isArray(selectedOptions)) {
      onChange({
        ...selectedOptions,
        [id]: !selectedOptions[id],
      } as T);
      return;
    }
    if (Array.isArray(selectedOptions)) {
      if (selectedOptions.includes(id)) {
        onChange(selectedOptions.filter((i) => i !== id) as T);
      } else {
        onChange([...selectedOptions, id] as T);
      }
    }
  };

  return (
    <div className="criterion-section">
      <h3>{title}</h3>
      <div className="options-list">
        {options.map(({ id, name }) => {
          let isChecked: boolean;
          if (isBooleanGroup && !Array.isArray(selectedOptions)) {
            isChecked = !!selectedOptions[id];
          } else if (Array.isArray(selectedOptions)) {
            isChecked = selectedOptions.includes(id);
          } else {
            isChecked = false;
          }
          return (
            <label
              key={id}
              className={isChecked ? "option-btn active" : "option-btn"}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChange(id)}
              />
              <span>{name}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CriterionSelector;
