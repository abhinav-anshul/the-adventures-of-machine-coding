let inputText = ""
let todosArray = []

const handleInputChange = (event) => {
  inputText = event.target.value
}

const handleFormSubmit = (event) => {
  event.preventDefault()
  todosArray.push({ id: todosArray.length, todo: inputText })
  console.log(todosArray)
  // create a ul tag
  let ULlist = document.createElement("ul")

  // create li tags for each elements
  todosArray?.forEach((i) => {
    let LIlist = document.createElement("li")
    LIlist.textContent = i?.todo
    ULlist.appendChild(LIlist)
  })
  let arrayContainer = document.getElementById("arrayId")
  arrayContainer.innerHTML = ""
  arrayContainer.appendChild(ULlist)
}

const handleClearAll = () => {
  const arrayContainer = document.getElementById("arrayId")
  arrayContainer.innerHTML = ""
}

document.getElementById("inputId").addEventListener("input", handleInputChange)
document.getElementById("formId").addEventListener("submit", handleFormSubmit)
document.getElementById("idClearAll").addEventListener("click", handleClearAll)
