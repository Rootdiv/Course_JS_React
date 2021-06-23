import {
  useState
} from 'react';

export function useChoices() {
  const [choice, setChoice] = useState();

  const changeChoice = event => {
    setChoice(event.target.value);
  };
  return {
    choice,
    changeChoice
  };
}

