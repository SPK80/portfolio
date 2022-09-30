import React, {useEffect, useState} from "react";

type PropsType = {
  until: number
  ms: number
  counting: React.FC<{ count: number }>
}
export const Counter: React.FC<PropsType> =
  ({counting, until, ms}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        setCount(c => {
          if (c < until) return c + 1
          else clearInterval(timer)
          return c
        })
      }, ms)
    }, [])
    const ch = counting as React.FC<{ count: number }>
    return (
      <>
        {ch({count})}
      </>
    )
  }