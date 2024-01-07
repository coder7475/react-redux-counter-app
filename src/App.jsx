import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { incrementCounter, resetCounter, decrementCounter } from './redux/actions/counterActions';


function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Learn React-Redux</h1>
      <div className="card">

        <p>
          count is {count}
        </p>

        <button onClick={() => dispatch(incrementCounter())}>
          Increase
        </button>
        <button onClick={() => dispatch(decrementCounter())}>
          Decrease
        </button>
        <button onClick={() => dispatch(resetCounter())}>
          Reset
        </button>
      </div>
     
    </>
  )
}

export default App
