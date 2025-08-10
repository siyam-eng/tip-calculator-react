import { TipButton } from "./TipButton";

export function TipSelector({
  tipPercentage,
  setTipPercentage,
}: {
  tipPercentage: number;
  setTipPercentage: (percentage: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3">
      <TipButton
        percentage="5"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />
      <TipButton
        percentage="10"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />
      <TipButton
        percentage="15"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />
      <TipButton
        percentage="25"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />
      <TipButton
        percentage="50"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />

      <TipButton
        percentage="Custom"
        currentTipPercentage={tipPercentage}
        setCurrentTipPercentage={setTipPercentage}
      />
      {/* Can you use the Input component here? - no, maybe it would be a better idea to use a different component - maybe try editting the TipButton component to function differently in case of a custom value */}
    </div>
  );
}
