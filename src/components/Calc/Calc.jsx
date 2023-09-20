import { useReducer } from 'react';
import styles from './Calc.module.css';
import reducer from '../../share/useReducer';

const initialState = {
  res: 0,
  first: 0,
  mathAction: '',
  second: 0,
};
function Calc() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.wrap}>
      <p>{state.res}</p>
      <p onClick={() => dispatch({ type: 'number', payload: 7 })}>7</p>
      <p onClick={() => dispatch({ type: 'number', payload: 8 })}>8</p>
      <p onClick={() => dispatch({ type: 'number', payload: 9 })}>9</p>
      <p
        className={styles.action}
        onClick={() => dispatch({ type: 'matAction', payload: '/' })}
      >
        /
      </p>
      <p
        className={styles.action}
        onClick={() => dispatch({ type: 'matAction', payload: '*' })}
      >
        *
      </p>
      <p onClick={() => dispatch({ type: 'number', payload: 4 })}>4</p>
      <p onClick={() => dispatch({ type: 'number', payload: 5 })}>5</p>
      <p onClick={() => dispatch({ type: 'number', payload: 6 })}>6</p>
      <p
        className={styles.action}
        onClick={() => dispatch({ type: 'matAction', payload: '+' })}
      >
        +
      </p>
      <p
        className={styles.action}
        onClick={() => dispatch({ type: 'matAction', payload: '-' })}
      >
        -
      </p>
      <p onClick={() => dispatch({ type: 'number', payload: 1 })}>1</p>
      <p onClick={() => dispatch({ type: 'number', payload: 2 })}>2</p>
      <p onClick={() => dispatch({ type: 'number', payload: 3 })}>3</p>
      <p>.</p>
      <p onClick={() => dispatch({ type: 'number', payload: 0 })}>0</p>
      <p className={styles.cancel} onClick={() => dispatch({ type: 'cancel' })}>
        C
      </p>
      <p onClick={() => dispatch({ type: 'equal' })}>=</p>
    </div>
  );
}

export default Calc;
