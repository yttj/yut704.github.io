const a = document.querySelector("#user-output"),
  b = document.querySelector("form#user-input");
b.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = e.target.querySelector("input");
  e = t.value;
  const u = document.createElement("li");
  (u.innerHTML = e), a.appendChild(u), (t.value = "");
});


const mouseMoveEventElement = document.querySelector('#mousemove')
const mouseMoveEventFeedbackElement = document.querySelector('#mousemove-feedback')

mouseMoveEventElement.addEventListener('mousemove', (event) => {
    console.log('mousemove event', event)
    // Get Mouse Position on X Axis
    const mouseX = event.clientX
    // Get Mouse Position on Y Axis
    const mouseY = event.clientY
    // Clear Existing Feedback Element
    mouseMoveEventFeedbackElement.innerHTML = ""
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse X: " + mouseX + ", Mouse Y: " + mouseY
    // Add Feedback Element to Page
    mouseMoveEventFeedbackElement.appendChild(feedbackElement)
})