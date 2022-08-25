import React, { useEffect, useState } from "react"

export default function Page() {
    const [value, setValue] = useState(false)

    useEffect(() => {
        console.log("effect")
        return () => {
          console.log("clean up")
        }
      }, [value])
      const clickHandler = () => {
        setValue(prevState=>!prevState)
    }

  return (
    <div>
      <h1>{value ? "hello" : "hey"}</h1>
      <button onClick={clickHandler}>click me</button>
    </div>
  )
}
