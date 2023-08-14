console.log("your index");



  /*$(document).hover(function() {
    $('img').on({
        'onmouseover': function() {
          let src = ($(this).attr('src') === './images/logoswap.png') ?
            './images/houselogo.png' :
            './images/logoswap.png';
          $(this).attr('src', src);
        }
      });
  });*/

  function changeImg1(){
    document.getElementById("img1").src = "./images/house.svg";
  };
  function changeImg2(){
    document.getElementById("img1").src = "./images/letterlogo.svg";
  };