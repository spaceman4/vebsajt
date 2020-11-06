//da vrati najgore na refresh demek
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//zemam skrol funkcija od window
window.onscroll = function () {
  scrollFunction();
};
//naznacuvam scroll funkcija
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bigHeader").style.height = "2rem";
    document.getElementById("bigHeader").style.justifyContent = "flex-start";
    document.getElementById("bigHeader").style.marginBottom = "2rem";
    document.getElementById("textHeader").style.fontSize = "1.5rem";
    document.getElementById("textHeader").style.paddingLeft = "0.5rem";
    document.getElementById("textHeader").style.paddingTop = "0.5rem";
    document.getElementById("textHeader").style.fontWeight = "500";
    document.getElementById("textHeader").style.opacity = "0.9";
    document.getElementById("gifPicture").style.height = "9rem";
    document.getElementById("shitContainer").style.marginTop = "8rem";
  } else {
    document.getElementById("bigHeader").style.height = "8rem";
    document.getElementById("bigHeader").style.justifyContent = "center";
    document.getElementById("bigHeader").style.marginBottom = "2rem";
    document.getElementById("textHeader").style.fontSize = "7rem";
    document.getElementById("textHeader").style.paddingLeft = "0rem";
    document.getElementById("textHeader").style.paddingTop = "0rem";
    document.getElementById("textHeader").style.fontWeight = "200";
    document.getElementById("textHeader").style.opacity = "0.4";
    document.getElementById("gifPicture").style.height = "9rem";
    document.getElementById("shitContainer").style.marginTop = "8rem";
  }
}
