import { ACTIONS } from "./App";

export default function OpperationButton({ dispatch, opration }) {
    return <button 
               onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { opration } })}
           >
            {opration}
        </button>
}