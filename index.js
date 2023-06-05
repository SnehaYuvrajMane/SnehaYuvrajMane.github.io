window.addEventListener("scroll", () => {
    var value = window.scrollY;
    var logo = document.getElementById("logo");
    var h1 = document.querySelector("h1");
    var blob = document.getElementById("blob");
    var blob2 = document.getElementById("blob2");
    var blob3 = document.getElementById("blob3");
    logo.style.top = value * -0.5 + "px";
    h1.style.top = value * 0.5 + "px";
    blob.style.left = value * -2 + "px";
    blob2.style.left = value * -1 + "px";
    blob3.style.right = value * -0.5 + "px";
  });
