const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

function mouseFollower () {
   window.addEventListener ("mousemove",function(dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
      
      
   });
}
function firstPageAnim() {
   var tl = gsap.timeline();
 
   tl.from("#nav", {
     y: "-10",
     opacity: 0,
     duration: 1.5,
     ease: Expo.easeInOut,
   })
     .to(".boundingelem", {
       y: 0,
       ease: Expo.easeInOut,
       duration: 2,
       delay: -1,
       stagger: 0.2,
     })
     .from("#herofooter", {
      y:-10,
      opacity:0,
      duration:2,
      delay: -1,
      ease: Expo.easeInOut,
     })
 }

 function circleChaptaKaro() {
   // defining default scale value
   var xscale = 1;
   var yscale = 1;
 
   var xprev = 0;
   var yprev = 0;
 
   window.addEventListener("mousemove", function (dets) {
     clearTimeout(timeout);
 
     xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
     yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
 
     xprev = dets.clientX;
     yprev = dets.clientY;
 
     mouseFollower(xscale, yscale);
 
     timeout = setTimeout(function () {
       document.querySelector(
         "#minicircle"
       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
     }, 100);
   });
 }
 
 firstPageAnim();
 mouseFollower();


// teeen elem la select karaych ....
// mousemove and mouseleave boht time lagla lihayla pan logic ez ahe dsa (wins here)

 document.querySelectorAll(".elem").forEach(function (elem) {
   var rotate = 0;
   var diffrot = 0;

   // var urls = [
   //    "https://kri5hna2135.github.io/Magma2/", // URL for the first element (barcon capital)
   //    "https://kri5hna2135.github.io/Magma2/",            // URL for the second element (NFL)
   //  ];
 
   //  // Redirect when clicked
   //  elem.addEventListener("click", function () {
   //    window.location.href = urls[index];
   //  });


 
   elem.addEventListener("mouseleave", function (dets) {
     gsap.to(elem.querySelector("img"), {
       opacity: 0,
       ease: Power3,
       duration: 0.5,
     });
   });
 
   elem.addEventListener("mousemove", function (dets) {
     var diff = dets.clientY - elem.getBoundingClientRect().top;
     diffrot = dets.clientX - rotate;
     rotate = dets.clientX  ;


     
     gsap.to(elem.querySelector("img"), {
       opacity: 1,
       ease: Power3,
       top: diff,
       left: dets.clientX,
       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
     });
   });
 });


//  document.getElementById("arrow").addEventListener("click",function(){
//    document.getElementById("herofooter").scrollIntoView({behaviour :'smooth'}) // "smooth" pan ek option ahe
 
//  })

// document.getElementById("arrow").addEventListener("click", function() {
//    var heroFooter = document.getElementById("herofooter");
 
//    // Check if you're already scrolled to the second section
//    if (window.scrollY < heroFooter.getBoundingClientRect().top + window.scrollY) {
//      // Scroll down to the second section
//      heroFooter.scrollIntoView({ behavior: 'smooth' });
//    } else {
//      // Scroll back up to the top
//      window.scrollTo({ top: 0, behavior: 'smooth' });
//    }
//  });