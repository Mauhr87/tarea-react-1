import React from 'react'

function Contador({current, previous, setCurrent, setPrevious}) {
    const setCount = () => {
        setCurrent(current + 1)
        if (current > 0) {
            setPrevious(previous + 1)
        }
    }
  return (
    <div>
        <p><strong>Current count: {current}</strong></p>
        <p><strong>Previous count: {previous}</strong></p>
        <button onClick={() => setCount()}>Increment</button>
    </div>
  )
}

export default Contador
