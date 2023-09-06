import { useState } from 'react'
import './App.css'
import { Hash } from 'react-feather';
import { ChevronUp } from 'react-feather';
import { ChevronsUp } from 'react-feather';
import { ChevronDown } from 'react-feather';
import { ChevronsDown } from 'react-feather';
import {RotateCcw } from 'react-feather';
function App() {
  const [count, setCount] = useState(0)
  const [me,  setMe]=useState(0)

  return (
    <>
      <div
        className="card"
      >
        <p className='current'>Current value:</p>
        <a style={{ fontSize: 70, color: "#4517CF", fontWeight: "700" }} className='numChange'>
          {count}
        </a>
        <div className='btn' >
        <button onClick={() => setCount((me) => me + 1)}>
        < ChevronUp />{" "}
          </button>
          <button onClick={() => setCount((me) => me + 10)}>
          < ChevronsUp />{" "}
          </button>
          <button onClick={() => setCount((me) => (me = 0))}>
          < RotateCcw />
          </button>
          <button
            onClick={() =>
              setCount((count) => (count = Math.floor(Math.random() * 100)))
            }
          >
            <Hash />{" "}
          </button>
          <button onClick={() => setCount((me) => me - 10)}>
          < ChevronsDown />
          </button>
          <button onClick={() => setCount((me) => me - 1)}>
          < ChevronDown />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App