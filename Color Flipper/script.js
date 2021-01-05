//const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]
const numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn1.addEventListener("click", function () {
  var color1 = "#"
  for (var i = 3; i < 9; i++) {
    color1 += numbers[Math.floor(Math.random() * 16)]
  }
  document.body.style.backgroundColor = color1
  color.textContent = color1
})

btn2.addEventListener("click", function () {
  document.body.style.backgroundColor = "#" + document.getElementById('inputColor').value
})

// ----------- Menu Controller -----------

document.getElementById('randomColor').style.display = "none"
document.getElementById('chooseColor').style.display = "none"

randomBtn.addEventListener("click", function (){
  document.getElementById('enterDiv').style.display = "none"
  document.getElementById('randomColor').style.display = "block"
})

chooseBtn.addEventListener("click", function (){
  document.getElementById('enterDiv').style.display = "none"
  document.getElementById('chooseColor').style.display = "block"
})
