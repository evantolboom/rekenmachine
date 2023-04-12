import { useReducer } from "react";
import DigitButton from "./DigitButtons";
import OpperationButton from "./OpperationButton";
import "./styles.css"

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_digit: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperant === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperant.includes(".")) {
        return state
      }
      return {
        ...state,
        currentOperant: `${state.currentOperant || ""}${payload.digit}`,
      }
  }
}

function App() {
  const [{ currentOperant, previousOperant, opration }, dispatch] = useReducer(reducer, {})

  
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operant">{previousOperant} {opration}</div>
        <div className="current-operant">{currentOperant}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OpperationButton opration="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OpperationButton opration="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OpperationButton opration="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OpperationButton opration="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  )
}

export default App;
