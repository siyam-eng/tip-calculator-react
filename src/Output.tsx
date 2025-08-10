import { OutputRow } from "./OutputRow";

export function Output({
  tipPerPerson,
  billPerPerson,
  onReset,
}: {
  tipPerPerson: number;
  billPerPerson: number;
  onReset: () => void;
}) {
  function handleClick() {
    console.log("Hello");
    onReset();
  }
  return (
    <div className="my-4 flex w-9/10 flex-col gap-4 justify-self-center rounded-md bg-green-900 p-4 sm:w-full">
      <OutputRow title="Tip Amount" amount={tipPerPerson} />
      <OutputRow title="Total Bill" amount={billPerPerson} />
      <button
        className="mx-auto mt-auto w-8/10 self-end rounded-sm bg-green-400"
        onClick={handleClick}
      >
        RESET
      </button>
    </div>
  );
}
