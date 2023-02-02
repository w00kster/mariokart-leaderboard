//This currently only works for whole numbers - will need to adjust for time data type
function findTotal(){
  var arr = document.getElementsByClassName('lapTime');
  var tot=0;
  for(var i=0;i<arr.length;i++){
      if(parseFloat(arr[i].value))
          tot += parseFloat(arr[i].value);
  }
  document.getElementById('total').value = tot;
}