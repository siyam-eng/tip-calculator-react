import type { ChangeEvent, FocusEvent } from "react";

export function TipButton({
  percentage,
  currentTipPercentage,
  setCurrentTipPercentage,
}: {
  percentage: string;
  currentTipPercentage: number;
  setCurrentTipPercentage: (percentage: number) => void;
}) {
  let bgColor = " bg-green-900";
  if (parseFloat(percentage) === currentTipPercentage) {
    bgColor = " bg-green-400";
  }

  let button = (
    <button
      className={"m-3 rounded-md px-4 py-2 text-white" + bgColor}
      onClick={() => {
        setCurrentTipPercentage(parseFloat(percentage));
        console.log(currentTipPercentage);
      }}
    >
      {percentage}
    </button>
  );

  function setCustomTipPercentage(
    e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
  ) {
    if (e.target.value.trim() === "") {
      setCurrentTipPercentage(0);
    } else {
      const input = parseFloat(e.target.value);
      if (input >= 0) {
        setCurrentTipPercentage(input);
        console.log(currentTipPercentage);
      }
    }
  }

  const tipOptions = [5, 10, 15, 25, 50];
  let isCustom = false;
  if (currentTipPercentage >= 0 && !tipOptions.includes(currentTipPercentage)) {
    isCustom = true;
  }
  let style = " bg-grey-200";
  if (isCustom) {
    style = " bg-green-400";
  }

  if (percentage === "Custom") {
    button = (
      <input
        value={currentTipPercentage > 0 && isCustom ? currentTipPercentage : ""}
        type="number"
        className={
          "bg-grey-200 m-3 rounded-md p-1 text-green-900 placeholder:text-sm focus:bg-green-400" +
          style
        }
        onChange={setCustomTipPercentage}
        onFocus={setCustomTipPercentage}
        placeholder={percentage}
      />
    );
  }
  return button;
}
