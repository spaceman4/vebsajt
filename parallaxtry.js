const simpleParallax = require("simple-parallax-js");

var image = document.getElementsByClassName("parallaxPic");
new simpleParallax(image, {
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
  scale: 1.5,
});
