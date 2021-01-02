
 AOS.init();
(function(){const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
}());
// document.addEventListener('click', () => {
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500)
// })

(function (){
    document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll('.object').forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 100;
        var y = (e.clientY * moving_value) / 100;
        move.style.transform= "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
}());

(function($) {
    var selector = ".section";
  
    var $slides = $(selector);
  
    var currentSlide = 0;
    var isAnimating = false;
  
    var stopAnimation = function() {
      setTimeout(function() {
        isAnimating = false;
      }, 300);
    };
  
    var bottomIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.bottom <= $(window).height();
    };
  
    var topIsReached = function($elem) {
      var rect = $elem[0].getBoundingClientRect();
      return rect.top >= 0;
    };
  
    document.addEventListener(
      "wheel",
      function(event) {
        var $currentSlide = $($slides[currentSlide]);
  
        if (isAnimating) {
          event.preventDefault();
          return;
        }
  
        var direction = -event.deltaY;
  
        if (direction < 0) {
          // next
          if (currentSlide + 1 >= $slides.length) return;
          if (!bottomIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide++;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            1000,
            stopAnimation
          );
        } else {
          // back
          if (currentSlide - 1 < 0) return;
          if (!topIsReached($currentSlide)) return;
          event.preventDefault();
          currentSlide--;
          var $slide = $($slides[currentSlide]);
          var offsetTop = $slide.offset().top;
          isAnimating = true;
          $("html, body").animate(
            {
              scrollTop: offsetTop
            },
            1000,
            stopAnimation
          );
        }
      },
      { passive: false }
    );
})(jQuery);

(function(){
    document.querySelector('.menu-open').addEventListener("click", function() {
      document.querySelector('.menu-open').classList.toggle('fadeOut');
      document.querySelector('.menu-close').classList.toggle('fadeOut');
      document.querySelector('.section-menu').classList.toggle('navActive');
    } );
    document.querySelector('.menu-close').addEventListener('click', function() {
      document.querySelector('.menu-open').classList.toggle('fadeOut');
      document.querySelector('.menu-close').classList.toggle('fadeOut');
      document.querySelector('.section-menu').classList.toggle('navActive');
    })
}());

(function(){
  document.querySelectorAll('.linkss').forEach(item => {
    item.addEventListener("mouseover", () => {
      document.querySelector('.cursor').classList.toggle('cursor-al');
      document.querySelector('.cursor').classList.toggle('cursor-active');
    });
  });
  document.querySelectorAll('.linkss').forEach(item => {
    item.addEventListener("mouseleave", () => {
      document.querySelector('.cursor').classList.toggle('cursor-al');
      document.querySelector('.cursor').classList.toggle('cursor-active');
    });
  });
  document.querySelectorAll('.linksss').forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector('.section-menu').classList.toggle('navActive');
      document.querySelector('.menu-open').classList.toggle('fadeOut');
      document.querySelector('.menu-close').classList.toggle('fadeOut');
    });
  });
}());

function loader(_success) {
  var obj = document.querySelector('.container-pre'),
  inner = document.querySelector('.percentage'),
  page = document.querySelector('.container');
  document.querySelector('.cursor').classList.toggle('cursor-active');
  var w = 0,
      t = setInterval(function() {
          w = w + 1;
          inner.textContent = w+'-100    ';
          if (w === 101){
              obj.classList.add('fadeOut');
              page.classList.remove('fadeOut');
              document.querySelector('.cursor').classList.toggle('cursor-active');
              clearInterval(t);
              w = 0;
              if (_success){
                  return _success();
              }
          }
      }, 70);
}
loader();
// $(document).mousemove(function(e){
//   $("#img1").css({left:e.pageX-50, top:e.pageY-50});
// });
// document.querySelector('.mosa').addEventListener("mouseover", function(){
//   document.querySelector('#img1').classList.toggle('fadeOut');
// })
// // document.querySelector('.mosa').addEventListener("mouseleave", function(){
// //   document.querySelector('.mosa').classList.remove('mos');
// // })
// document.querySelector('.mosa').addEventListener("mouseleave", function(){
//   document.querySelector('#img1').classList.toggle('fadeOut');
// })