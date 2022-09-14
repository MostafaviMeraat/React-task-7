import { useLayoutEffect, useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      updateTime()

    }, 1000)
    return () => clearInterval(timer)
  }, [counter])

  const updateTime = () => {
    setCounter(counter + 1)
  }

  return (<div>

    <h1>{counter}</h1>
    <h2> Seconds passed since you are wasting your time in this bullshit page, Happy now!</h2>


  </div>)
}

export default Counter