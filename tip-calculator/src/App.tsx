import "./index.css";

const App = () => {
  return (
    <div className="font-space-mono grid font-bold">
      <img
        src="src/assets/logo.svg"
        alt="Splitter Logo"
        className="my-4 place-self-center"
      />
      <div className="container min-w-full rounded-t-2xl bg-white p-4">
        <Input label="Bill" />
        <TipSelector />
        <Input label="Number of People" />
        <Output />
      </div>
    </div>
  );
};

export function Output() {
  return (
    <div className="my-4 flex w-9/10 flex-col gap-4 justify-self-center rounded-md bg-green-900 p-4">
      <p className="mx-4 flex justify-between">
        <span className="text-white">
          Tip Amount{" "}
          <span className="text-grey-50 block text-sm italic">/per person</span>
        </span>
        <span className="text-green-400">$4.5</span>
      </p>
      <p className="mx-4 flex justify-between">
        <span className="text-white">
          Total Amount{" "}
          <span className="text-grey-50 block text-sm italic">/per person</span>
        </span>
        <span className="text-green-400">$19.5</span>
      </p>
    </div>
  );
}

export function TipButton({ percentage }: { percentage: string }) {
  return (
    <button className="m-3 rounded-md bg-green-900 px-4 py-2 text-white">
      {percentage}
    </button>
  );
}

export function Input({ label }: { label: string }) {
  return (
    <div className="mx-auto flex max-w-9/10 flex-col">
      <label htmlFor="textinput">{label}</label>
      <div className="relative">
        <img
          src="src/assets/icon-dollar.svg"
          alt=""
          className="absolute bottom-3 px-2"
        />
        <input
          type="number"
          name="textinput"
          className="bg-grey-50 w-full [appearance:textfield] rounded-sm py-1.5 pr-3 text-right text-green-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
}

export function TipSelector() {
  return (
    <div className="grid grid-cols-2">
      <TipButton percentage="5" />
      <TipButton percentage="10" />
      <TipButton percentage="15" />
      <TipButton percentage="25" />
      <TipButton percentage="50" />
      <TipButton percentage="Custom" />
    </div>
  );
}

export default App;
