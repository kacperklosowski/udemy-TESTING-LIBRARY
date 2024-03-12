import {useState} from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);
  const nextColor = currentColor === 'red' ? 'blue' : 'red';
  const buttonText = `Change to ${nextColor}`;

  return (
    <div>
      <label htmlFor="disable-button">Disable button</label>
      <input type="checkbox" id="disable-button" defaultChecked={isDisabled} aria-checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
      <button disabled={isDisabled} className={currentColor} onClick={() => setCurrentColor(nextColor)}>{buttonText}</button>
    </div>
  );
}

export default App;
