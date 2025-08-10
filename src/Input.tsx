import type { ChangeEvent } from "react";

export function Input({
  label,
  iconPath,
  value,
  setValue,
}: {
  label: string;
  iconPath: string;
  value: number;
  setValue: (value: number) => void;
}) {
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    // Add logic to validate the data
    const value = parseInt(e.target.value);
    if (label === "Number of People") {
      if (value > 0) {
        setValue(value);
      } else if (Number.isNaN(value)) {
        setValue(1);
      }
    } else if (label === "Bill") {
      if (value >= 0) {
        setValue(value);
      } else if (Number.isNaN(value)) {
        setValue(0);
      }
    }
  }
  return (
    <div className="mx-auto flex max-w-9/10 flex-col">
      <label htmlFor="textinput">
        {label}
        <div className="relative">
          <img
            src={iconPath}
            alt="Input Value Icon"
            className="absolute bottom-3 px-2"
          />
          <input
            placeholder="0"
            type="number"
            name="textinput"
            value={value === 0 ? "" : value}
            onChange={handleInput}
            className="bg-grey-50 w-full [appearance:textfield] rounded-sm py-1.5 pr-3 text-right text-green-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
      </label>
    </div>
  );
}
