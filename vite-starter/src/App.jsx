import {useState} from 'react';
import {kebabCaseToTitleCase} from './helpers';
function App() {
  const [currentColor, setCurrentColor] = useState('medium-violet-red');
  const [isDisabled, setIsDisabled] = useState(false);
  const nextColor = currentColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const formattedNextColor = kebabCaseToTitleCase(nextColor);
  const buttonText = `Change to ${formattedNextColor}`;

  return (
    <div>
      <label htmlFor="disable-button">Disable button</label>
      <input type="checkbox" id="disable-button" defaultChecked={isDisabled} aria-checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
      <button disabled={isDisabled} className={isDisabled ? 'grey' : currentColor} onClick={() => setCurrentColor(nextColor)}>{buttonText}</button>
    </div>
  );
}

export default App;
