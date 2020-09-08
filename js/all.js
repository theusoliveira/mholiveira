var i = setInterval(function () {
    
  clearInterval(i);

  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "flex";

}, 2000);