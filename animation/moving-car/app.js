$(function(){
  //variables
  $surface = $('.surface');
  $car = $('.car');
  $img = $('.car img');
  let flag = true;
  let surfaceMoving = false
  let animating = false;

  const cars = ['./assets/Img_05.png', './assets/Img_06.png']

  //keypress events
  $(document).on('keypress', function(e){
    if(animating !== true){
      animating = true;
      $($car).removeClass('getBackTheCar');

      if(e.which == 13){
        $($surface).toggleClass('moveForward');
        $($car).toggleClass('suspension');
        if(surfaceMoving){
          surfaceMoving = false;
        } else {
          surfaceMoving = true;
        }
        if(surfaceMoving == false){
          $($car).addClass('goAway');
          setTimeout(() => {
            $($car).addClass('vis-hidden');
            $('.waitForNextRide').removeClass('vis-hidden');
          }, 1500);
        } else {
          $($car).removeClass('vis-hidden');
          $($car).removeClass('goAway');
          $('.waitForNextRide').addClass('vis-hidden');
        }
      }

      if(e.which == 119){
        if(flag){
          flag = false;
          $img.attr('src', cars[0]);
        } else {
          flag = true;
          $img.attr('src', cars[1]);
        }
      }
    }
    animating = false;
  })

  setInterval(() => {
    if($($car).hasClass('vis-hidden')){
      setTimeout(() => {
        $($car).removeClass('vis-hidden');
        $('.waitForNextRide').addClass('vis-hidden');
        $($car).addClass('getBackTheCar');
      }, 3000);
    }
  }, 1000);
})