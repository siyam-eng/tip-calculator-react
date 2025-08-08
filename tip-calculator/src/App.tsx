import './index.css';

const App = () => {
  return <div className='grid'>
    <img src="src/assets/logo.svg" alt="Splitter Logo" className='place-self-center my-4' />
    <div className="container bg-white">
      <Input label="Bill" />
      <TipSelector />
      <Input label="Number of People" />
      <Output />
    </div>
  </div>
}

export function Output() {
  return <div>
    Hello output
  </div>
}

export function TipButton({ percentage }: { percentage: string }) {
  return <button className="bg-green-700 px-4 py-2 m-3 rounded-md">{percentage}</button>
}


export function Input({ label }: { label: string }) {
  return (
    <div className="flex flex-col max-w-9/10">
      <label htmlFor='textinput'>
        {label}
      </label>
      <input type="number" name='textinput' className='border-2' />
    </div>
  )
}

export function TipSelector() {
  return <div className='grid grid-cols-2'>
    <TipButton percentage='5' />
    <TipButton percentage='10' />
    <TipButton percentage='15' />
    <TipButton percentage='25' />
    <TipButton percentage='50' />
    <TipButton percentage='Custom' />
  </div>
}


export default App