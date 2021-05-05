function pickedcolor() {
  
    
    var redclr = document.getElementById('red').value;
    var greenclr = document.getElementById('green').value;
    var blueclr = document.getElementById('blue').value;
    var finalclr = 'rgb(' + redclr + ',' + greenclr + ',' + blueclr + ')';
  box.style.backgroundColor = finalclr;
  
    
    document.getElementById('box').value = finalclr;
  
}
   
document.getElementById('red')
    .addEventListener('input', pickedcolor);
  
document.getElementById('green')
    .addEventListener('input', pickedcolor);

document.getElementById('blue')
    .addEventListener('input', pickedcolor);