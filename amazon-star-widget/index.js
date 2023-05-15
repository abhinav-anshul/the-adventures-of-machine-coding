const starAll = document.querySelectorAll("#star")
let upto = -1

;(function () {
  const starAll = document.querySelectorAll("#star")
  const container = document.querySelector("#container")
  container.setAttribute("style", "display: flex; margin : 0 auto")
  starAll.forEach((i) => {
    i.setAttribute(
      "style",
      "background-color : gray; height : 50px ; width : 50px;margin : 20px; cursor : pointer"
    )
  })
  starAll.forEach((i, index) => {
    i.setAttribute(`data-star`, `${index}`)
  })
})()

starAll.forEach((i, index) => {
  i.addEventListener("mouseenter", () => handleOnMouseEnter(i, index))
  i.addEventListener("mouseleave", () => handleOnMouseLeave(i, index))
  i.addEventListener("click", () => handleOnClick(i, index))
})

const handleOnMouseEnter = (i, index) => {
  for (let i = 0; i <= index; i++) {
    starAll[i].style.backgroundColor = "red"
  }
}

const handleOnMouseLeave = (i, index) => {
  if (upto === -1) {
    for (let i = 0; i <= index; i++) {
      starAll[i].style.backgroundColor = "gray"
    }
  } else {
    for (let i = upto + 1; i <= starAll.length; i++) {
      starAll[i].style.backgroundColor = "gray"
    }
  }
}

const handleOnClick = (i, index) => {
  for (let i = 0; i <= index; i++) {
    starAll[i].style.backgroundColor = "red"
  }
  upto = index
}
