let temp1 = document.getElementById("temp1");
let temp2 = document.getElementById("temp2");
let header = document.querySelector(".header");

window.onscroll = function () {
  if (this.scrollY > 480) btn.style.opacity = "1";
  else btn.style.opacity = "0";

  if (this.scrollY >= 100) {
    temp1.style.opacity = "0";
    temp2.style.opacity = "1";
    temp2.style.display = "flex";
    temp2.style.position = "fixed";
    temp2.style.width = "100%";
    temp2.style.backgroundColor = "rgba(255, 255, 255, 0.93)";
    temp2.style.right = 0;
    temp2.style.top = 0;
    temp2.style.gap = "284px";
    temp2.style.padding = "25px";
    temp2.style.borderRadius = "0 0px 20px 20px";
    temp2.style.boxShadow = "0 2px 10px rgba(52, 61, 71, 0.2)";
    temp2.style.justifyContent = "center";
    temp2.style.alignItems = "center";
    temp2.style.alignContent = "center";
    temp2.style.zIndex = "100";
    temp1.style.zIndex = "-3";
  } else {
    temp1.style.display = "flex";
    temp1.style.zIndex = "100";
    temp2.style.zIndex = "-3";
    temp1.style.opacity = "1";
    temp2.style.opacity = "0";
  }
};

let btn = document.getElementById("top");

btn.onclick = function () {
  window.scrollTo(0, 0);
};
