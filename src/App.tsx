import "./index.css";
import { Input } from "./Input";
import { TipSelector } from "./TipSelector";
import { Output } from "./Output";
import { useState } from "react";
import splitterLogoPath from "./assets/logo.svg";
import personIconPath from "./assets/icon-person.svg";
import dollarIconPath from "./assets/icon-dollar.svg";

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);

  // calculate the output
  const totalTip = billAmount > 0 ? billAmount * (tipPercentage / 100) : 0;
  const tipPerPerson =
    totalTip > 0 && numberOfPeople > 0 ? totalTip / numberOfPeople : 0;
  const totalBillPerPerson =
    billAmount > 0 && numberOfPeople > 0
      ? (billAmount + totalTip) / numberOfPeople
      : 0;

  function resetStates() {
    // set the value of the states to their initial values
    setBillAmount(0);
    setNumberOfPeople(1);
    setTipPercentage(0);
  }
  return (
    <div className="font-space-mono grid font-bold">
      <img
        src={splitterLogoPath}
        alt="Splitter Logo"
        className="my-4 place-self-center"
      />
      <div className="container w-full max-w-[750px] rounded-2xl bg-white p-4 sm:mx-auto sm:flex sm:w-6/10">
        <div className="left">
          <Input
            label="Bill"
            iconPath={dollarIconPath}
            value={billAmount}
            setValue={setBillAmount}
          />
          <TipSelector
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
          <Input
            label="Number of People"
            iconPath={personIconPath}
            value={numberOfPeople}
            setValue={setNumberOfPeople}
          />
        </div>
        <Output
          tipPerPerson={tipPerPerson}
          billPerPerson={totalBillPerPerson}
          onReset={resetStates}
        />
      </div>
    </div>
  );
};

export default App;
