import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

// previous state snapshot
const inputStateReducer = (state, action) => {
  // new state snapshot
  if {action.type === 'INPUT'} {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value }
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' }
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // stateful logic
  // should be generic - it's not limited to one specific input!
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
