document.getElementById("colored-element").style.color = "#32a852";

const childElement = document.createElement('p')
    childElement.innerHTML = "Hope I get good grades"
    document.getElementById("parent-element").appendChild(childElement);



const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]
for (let i = 0; i < forLoopArray.length; i++) {
    console.log(forLoopArray[i])
  }
  document.getElementById("colored-element").style.color = "#DDA0DD";

  const clickEventElement = document.querySelector('#event-listener-button')
  clickEventElement.addEventListener('click', (event) => {
      console.log('click event', event)
  })