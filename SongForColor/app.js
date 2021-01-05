const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const color = document.getElementById('color')
const changebutton = document.getElementById('change-button')
const openModal = document.getElementById('pick-button1')
const showbutton = document.getElementById('show-button')
const pickbutton2 = document.getElementById('pick-button2')
// const closeModal = document.getElementById('closeModal')
const modal = document.getElementById('modal')

const randomColor = () => {
  var color1 = "#"
  for (var i = 3; i < 9; i++) {
    color1 += numbers[Math.floor(Math.random() * 16)]
  }
  document.body.style.backgroundColor = color1
  color.textContent = color1
}

changebutton.addEventListener('click', function () {
  randomColor()
})

showbutton.addEventListener("click", function () {
  document.body.style.backgroundColor = "#" + document.getElementById('input-color').value
})

// ----------- Menu Controller -----------

document.getElementById('random-container').style.display = "none"
document.getElementById('choose-container').style.display = "none"

randomBtn.addEventListener("click", function () {
  randomColor()
  document.getElementById('enter-div').style.display = "none"
  document.getElementById('random-container').style.display = "block"
})

chooseBtn.addEventListener("click", function () {
  document.getElementById('enter-div').style.display = "none"
  document.getElementById('choose-container').style.display = "block"
})

openModal.addEventListener('click', function() { 
  modal.classList.add('open-modal')
})

// closeModal.addEventListener('click', function() { 
//   modal.classList.remove('open-modal')
// })

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('open-modal')
  }
}