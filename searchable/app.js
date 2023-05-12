let dataCollection = []
let inputText = ""
;(function () {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      dataCollection.push(...data)
      generateList()
    })
})()

function generateList() {
  // create a ul tag
  let ULlist = document.createElement("ul")
  // create li tags for each elements
  dataCollection
    ?.filter((i) => i?.title?.includes(inputText))
    ?.map((i) => {
      let LIlist = document.createElement("li")
      LIlist.textContent = i?.title
      ULlist.appendChild(LIlist)
    })
  let arrayContainer = document.getElementById("arrayId")
  arrayContainer.replaceChildren(ULlist)
}

const handleInputChange = (event) => {
  inputText = event.target.value
  generateList()
}

document.getElementById("inputId").addEventListener("input", handleInputChange)
