art.addEventListener('click', function(){
  document.getElementById('number').innerHTML = parseInt(document.getElementById('number').innerHTML) + 1;
  if(parseInt(document.getElementById('number').innerHTML) == 0){
    document.getElementById('number').style.color = "#14171c"
  }
})

eks.addEventListener('click', function(){
  document.getElementById('number').innerHTML = parseInt(document.getElementById('number').innerHTML) - 1;
  if(parseInt(document.getElementById('number').innerHTML) == -1){
    document.getElementById('number').style.color = "#df0a0a"
  }
})

res.addEventListener('click', function(){
document.getElementById('number').innerHTML = 0;

})
