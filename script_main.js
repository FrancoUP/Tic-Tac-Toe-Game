const containerX = document.querySelector(".container-x");
const containerO = document.querySelector(".container-o");
const x = document.querySelector(".icon-x");
const o = document.querySelector(".icon-o");
const btnCpu = document.querySelector(".btn-cpu");
const btnPlayer = document.querySelector(".btn-player");

////////////////////////////////////////////////////////////////


const playerInfoObj = {
    player: "o",
    opponent: "",
    database: ""
}



containerX.addEventListener("click", function(e) {
  e.preventDefault();

  containerX.style.backgroundColor = "#A8BFC9";
  containerO.style.backgroundColor = "#1A2A33";
  x.setAttribute("style", "stroke:none;fill-rule:evenodd;fill:#1A2A33;fill-opacity:1;");
  o.setAttribute("style", "stroke:none;fill-rule:nonzero;fill:#A8BFC9;fill-opacity:1;")
  playerInfoObj.player = "x";
})


containerO.addEventListener("click", function(e) {
  e.preventDefault();

  containerO.style.backgroundColor = "#A8BFC9";
  containerX.style.backgroundColor = "#1A2A33";
  x.setAttribute("style", "stroke:none;fill-rule:evenodd;fill:#A8BFC9;fill-opacity:1;");
  o.setAttribute("style", "stroke:none;fill-rule:nonzero;fill:#1A2A33;fill-opacity:1;");
  playerInfoObj.player = "o";
})



btnPlayer.addEventListener("click", function(e) {
  e.preventDefault();

  playerInfoObj.opponent = "p2";
  if(playerInfoObj.player === "o") playerInfoObj.database = "dataToSave_P2_O";
  if(playerInfoObj.player === "x") playerInfoObj.database = "dataToSave_P2_X";

  const dataToPass = JSON.stringify(playerInfoObj);
  localStorage.setItem("dataToPass", dataToPass);
  window.location.href = "game_page.html";

  // var url = "game_page.html?data=" + encodeURIComponent(playerInfoObj);
  // window.location.href = url;

  // first 
  // window.location.href = this.parentElement.href;
})

btnCpu.addEventListener("click", function(e) {
  e.preventDefault();

  playerInfoObj.opponent = "cpu";
  if(playerInfoObj.player === "o") playerInfoObj.database = "dataToSave_CPU_O";
  if(playerInfoObj.player === "x") playerInfoObj.database = "dataToSave_CPU_X";
  
  const dataToPass = JSON.stringify(playerInfoObj);
  localStorage.setItem("dataToPass", dataToPass);
  window.location.href = "game_page.html";
})


//////////////////////////////////////////////////////////////////////


btnCpu.addEventListener("touchstart", function(e) {
  e.preventDefault();

  btnCpu.style.backgroundColor = "#FFC860";

}, {passive: false})

btnCpu.addEventListener("touchend", function(e) {
  e.preventDefault();

  btnCpu.style.backgroundColor = " #F2B137";
  playerInfoObj.opponent = "cpu";
  
  const dataToPass = JSON.stringify(playerInfoObj);
  localStorage.setItem("dataToPass", dataToPass);
  window.location.href = "game_page.html";

}, {passive: false})


btnPlayer.addEventListener("touchstart", function(e) {
  e.preventDefault();

  btnPlayer.style.backgroundColor = "#65E9E4";

}, {passive: false})

btnPlayer.addEventListener("touchend", function(e) {
  e.preventDefault();

  btnPlayer.style.backgroundColor = "#31C3BD";
  playerInfoObj.opponent = "p2";
  
  const dataToPass = JSON.stringify(playerInfoObj);
  localStorage.setItem("dataToPass", dataToPass);
  window.location.href = "game_page.html";
  
}, {passive: false})


