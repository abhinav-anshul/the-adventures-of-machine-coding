import React, { useState, useEffect } from "react"

function App() {
  const [sq, setSq] = useState([
    { id: 0, bgColor: "transparent", isChecked: false, track: null },
    { id: 1, bgColor: "transparent", isChecked: false, track: null },
    { id: 2, bgColor: "transparent", isChecked: false, track: null },
    { id: 3, bgColor: "transparent", isChecked: false, track: null },
    { id: 4, bgColor: "transparent", isChecked: true, track: null },
    { id: 5, bgColor: "transparent", isChecked: true, track: null },
    { id: 6, bgColor: "transparent", isChecked: false, track: null },
    { id: 7, bgColor: "transparent", isChecked: false, track: null },
    { id: 8, bgColor: "transparent", isChecked: false, track: null },
  ])

  const handleClick = (i) => {
    let state = sq

    if (state[i?.id].bgColor === "transparent" && state[i?.id].isChecked === false) {
      state[i?.id].bgColor = "green"
      state[i?.id].isChecked = true
      if (state.every((i) => i?.track === null)) {
        state[i?.id].track = 0
      } else {
        let largestTrack = Math.max(...state.map((i) => i?.track))
        state[i?.id].track = largestTrack + 1
      }
    }
    setSq([...state])
  }

  useEffect(() => {
    let state = sq

    let filteredState = state

    let isAllChecked = filteredState.every((itm) => itm?.isChecked === true)

    for (let i = 0; i < filteredState?.length; i++) {
      setTimeout(function () {
        if (isAllChecked) {
          let newState = [...filteredState]
          newState[i].bgColor = "transparent"
          setSq(newState)
        }
      }, i * 1000)
    }
  }, [sq])

  return (
    <>
      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            width: "200px",
          }}
        >
          {sq?.map((i, index) => (
            <div key={i?.id}>
              <div
                onClick={() => handleClick(i)}
                style={
                  i?.id === 4 || i?.id === 5
                    ? { display: "none" }
                    : {
                        border: "1px solid black",
                        height: "60px",
                        width: "60px",
                        cursor: "pointer",
                        backgroundColor: i?.bgColor,
                      }
                }
              >
                {i?.id}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
