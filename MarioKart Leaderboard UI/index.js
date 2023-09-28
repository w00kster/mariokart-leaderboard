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

document.addEventListener("DOMContentLoaded", function(){
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/icons8-previous-50.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/icons8-next-50.png'>"
  });
});
