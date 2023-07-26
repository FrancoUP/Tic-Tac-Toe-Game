const messageContainer = document.querySelector(".message-container");
const messageIconContainer = document.querySelector(".message-icon-cont");
const you = document.querySelector(".you");
const cpu = document.querySelector(".cpu");
const box = document.querySelectorAll(".box");
const turn = document.querySelector(".turn-box");
const iconBox = document.querySelector(".icon-cont");
const iconTurn = turn.querySelector('.icon-turn');
const overlay = document.querySelector('.overlay');
const band = document.querySelector('.box-band');
const quit = document.querySelector('.btn-quit');
const nextRound = document.querySelector('.btn-next-round');
const restart = document.querySelector('.reload');
const resX = document.querySelector('.result-you');
const resO = document.querySelector('.result-cpu');
const resTie = document.querySelector(".result-ties");
const title = document.querySelector('.title');
const message = document.querySelector('.message');
const topBox = document.querySelector('.top-box');
let x_o_Toggler = true;
let keyTimeout = true;


///////////////////////////////////////////////////////////////////////


  const playerInfo = function () {

    const dataReceived = localStorage.getItem("dataToPass");
    return JSON.parse(dataReceived);
  };

  const dataPlayer = playerInfo();


  (function setPlayers() {

    if(dataPlayer.player === "x" && dataPlayer.opponent === "cpu") {
      you.innerHTML = "X (YOU)";
      cpu.innerHTML = "O (CPU)";
    } else if(dataPlayer.player === "o" && dataPlayer.opponent === "cpu") {
      you.innerHTML = "X (CPU)";
      cpu.innerHTML = "O (YOU)";
    } else if(dataPlayer.player === "x" && dataPlayer.opponent === "p2") {
      you.innerHTML = "X (P1)";
      cpu.innerHTML = "O (P2)";
    } else if(dataPlayer.player === "o" && dataPlayer.opponent === "p2") {
      you.innerHTML = "X (P2)";
      cpu.innerHTML = "O (P1)";
    }
  })();


  const showMessage = function() {

    overlay.style.opacity = "0.5";
    band.style.opacity = "1";
    overlay.style.zIndex = "103";
    band.style.zIndex = "104"; 
  };


  const setMessageDefaultSettings = function() {

    overlay.style.opacity = "0";
    band.style.opacity = "0";
    overlay.style.zIndex = "100";
    band.style.zIndex = "101";
    quit.innerHTML = "QUIT";
    quit.style.width = "76px"
    nextRound.innerHTML = "NEXT ROUND";
    message.innerHTML = "TAKES THE ROUND";
  };


  const setRestartFeatures = function() {

    showMessage();
    messageIconContainer.style.display = "none";
    quit.innerHTML = "NO, CANCEL";
    quit.style.width = "146px"
    nextRound.innerHTML = "YES, RESTART";
    message.style.color = "#A8BFC9";
    message.innerHTML = "RESTART GAME?";
    title.innerHTML = "";
    if(window.screen.width >= 320) quit.style.width = "146px";
    else quit.style.width = "110px";

  };


  const renderArrGameGrid = function() {

    const arrGrid = [];
    [...box].forEach( el => arrGrid.push(el.getAttribute("data-clicked")));

    const obj0 = { 0: `${arrGrid[0]}`, 1: `${arrGrid[1]}`, 2: `${arrGrid[2]}`};
    const obj1 = { 3: `${arrGrid[3]}`, 4: `${arrGrid[4]}`, 5: `${arrGrid[5]}`};
    const obj2 = { 6: `${arrGrid[6]}`, 7: `${arrGrid[7]}`, 8: `${arrGrid[8]}`};
    const obj3 = { 6: `${arrGrid[6]}`, 4: `${arrGrid[4]}`, 2: `${arrGrid[2]}`};
    const obj4 = { 0: `${arrGrid[0]}`, 4: `${arrGrid[4]}`, 8: `${arrGrid[8]}`};
    const obj5 = { 0: `${arrGrid[0]}`, 3: `${arrGrid[3]}`, 6: `${arrGrid[6]}`};
    const obj6 = { 1: `${arrGrid[1]}`, 4: `${arrGrid[4]}`, 7: `${arrGrid[7]}`};
    const obj7 = { 2: `${arrGrid[2]}`, 5: `${arrGrid[5]}`, 8: `${arrGrid[8]}`};
    const obj8 = { 3: `${arrGrid[3]}`, 0: `${arrGrid[0]}`, 1: `${arrGrid[1]}`};
    const obj9 = { 1: `${arrGrid[1]}`, 2: `${arrGrid[2]}`, 5: `${arrGrid[5]}`};
    const obj10 = { 5: `${arrGrid[5]}`, 8: `${arrGrid[8]}`, 7: `${arrGrid[7]}`};
    const obj11 = { 3: `${arrGrid[3]}`, 6: `${arrGrid[6]}`, 7: `${arrGrid[7]}`};
    const obj12 = { 3: `${arrGrid[3]}`, 0: `${arrGrid[0]}`, 2: `${arrGrid[2]}`};
    const obj13 = { 6: `${arrGrid[6]}`, 0: `${arrGrid[0]}`, 1: `${arrGrid[1]}`};
    const obj14 = { 0: `${arrGrid[0]}`, 6: `${arrGrid[6]}`, 7: `${arrGrid[7]}`};
    const obj15 = { 8: `${arrGrid[8]}`, 6: `${arrGrid[6]}`, 3: `${arrGrid[3]}`};
    const obj16 = { 6: `${arrGrid[6]}`, 8: `${arrGrid[8]}`, 5: `${arrGrid[5]}`};
    const obj17 = { 7: `${arrGrid[7]}`, 8: `${arrGrid[8]}`, 2: `${arrGrid[2]}`};
    const obj18 = { 8: `${arrGrid[8]}`, 2: `${arrGrid[2]}`, 1: `${arrGrid[1]}`};
    const obj19 = { 5: `${arrGrid[5]}`, 2: `${arrGrid[2]}`, 0: `${arrGrid[0]}`};

    return [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19];
  };


  const addLogoOnMessage = function(letter) {

    if(window.screen.width > 480) {
      messageIconContainer.insertAdjacentHTML("afterbegin", `<img src="./assets/icon-${letter}.png" alt="qr code image" class="${letter}-from-message message-64">`);
    } else {
      messageIconContainer.insertAdjacentHTML("afterbegin", `<img src="./assets/icon-${letter}.png" alt="qr code image" class="${letter}-from-message message-32">`);
    }
  };


  const removeLogoOnMessage = function() {

    const x_message = document.querySelector('.x-from-message');
    const o_message = document.querySelector('.o-from-message');

    if(x_message) x_message.remove();
    if(o_message) o_message.remove();  
  };


  const addLogo_X_OnTurn = function() {
    iconBox.insertAdjacentHTML("afterbegin", `<img src="./assets/icon-x.png" alt="qr code image" class="icon-x">`);
    iconBox.setAttribute("data-store", "x");
    const elementX = iconBox.querySelector('.icon-x');
    elementX.style.width = "20px";
    elementX.style.height = "20px";
  };

  addLogo_X_OnTurn();

  const addLogo_O_OnTurn = function() {

    iconBox.insertAdjacentHTML("afterbegin", `<img src="./assets/icon-o.png" alt="qr code image" class="icon-o">`);
    iconBox.setAttribute("data-store", "o");
    const elementX = iconBox.querySelector('.icon-o');
    elementX.style.width = "20px";
    elementX.style.height = "20px";
  };


  const removeLogoOnTurn = function() {

    const elementX = iconBox.querySelector('.icon-x');
    const elementO = iconBox.querySelector('.icon-o');

    if(elementO) elementO.remove();
    if(elementX) elementX.remove();
  };


  const addLogoOnGridClick = function(el, letter) {

    if(window.screen.width > 480) {
      el.insertAdjacentHTML("afterbegin", `<img class="immagine-64" src="./assets/icon-${letter}.png" alt="qr code image">`);
    } else {
      el.insertAdjacentHTML("afterbegin", `<img class="immagine-42" src="./assets/icon-${letter}.png" alt="qr code image">`);
    }
  };


  const addLogoOnGridHover = function(el, letter) {

    if(window.screen.width > 480) {
      el.insertAdjacentHTML("afterbegin", `<object class="immagine-64" title="icon outline" type="image/svg+xml" data="./assets/icon-${letter}-outline.svg"></object>`);
    } else {
      el.insertAdjacentHTML("afterbegin", `<img class="immagine-42" src="./assets/icon-${letter}-outline.png" alt="qr code image">`);
    }
  };


  const setWinner = function(valArr) {
    
    showMessage();
    removeLogoOnMessage();
    messageIconContainer.style.display = "block";
    if(dataPlayer.opponent === "p2") (dataPlayer.player === valArr[0]) ? title.innerHTML = "PLAYER 1 WINS!" : title.innerHTML = "PLAYER 2 WINS!";
    if(dataPlayer.opponent === "cpu") (dataPlayer.player === valArr[0]) ? title.innerHTML = "YOU WON!" : title.innerHTML = "OH NO, YOU LOST…";

    if(valArr[0] === "x") {

       resX.innerHTML = Number(resX.innerHTML) + 1;
       addLogoOnMessage("x");
       message.style.color = "var(--light-blue, #31C3BD)";
    
    } else {

       resO.innerHTML = Number(resO.innerHTML) + 1;
       addLogoOnMessage("o");
       message.style.color = "#F2B137";
    }
  };


  const renderWinner = function(valArr) {

    if(valArr.length === 3 && valArr[0] === valArr[1] && valArr[1] === valArr[2]) {
          
      setWinner(valArr);
      return true;
    };
    return false;
  };


  const setTie = function() {
    
    showMessage();

    resTie.innerHTML = Number(resTie.innerHTML) + 1;
    title.innerHTML = "";
    message.style.color = "#A8BFC9";
    message.innerHTML = "ROUND TIED";
    messageIconContainer.style.display = "none";
    
  };


  const renderTie = function() {

    let tieCheck = [...box].map( el => el.getAttribute("data-clicked") ).includes("");
    if(!tieCheck) {
      setTie();
    }
  };


  const checkWin = function() {

    const arrObj = renderArrGameGrid().slice(0,8);
    let chiave = true;

    for(let i = 0; i < arrObj.length; i++){

        let valArr = [];
        
        Object.values(arrObj[i]).forEach( val => { 
          if(val !== "") valArr.push(val); 
        });

        if(renderWinner(valArr)){ 
          chiave = false;
          break;
        }

        valArr = [];
    }

    if(chiave) renderTie();

  };


  const setActionsOnClick = function(el) {

    if(x_o_Toggler && el.innerHTML === "") {
      if(dataPlayer.opponent === "p2") x_o_Toggler = false;

      addLogoOnGridClick(el, "x")
      el.setAttribute("data-clicked", "x");
      removeLogoOnTurn();
      addLogo_O_OnTurn();

    } else if(!x_o_Toggler && el.innerHTML === "") {
      if(dataPlayer.opponent === "p2") x_o_Toggler = true;

      addLogoOnGridClick(el, "o")
      el.setAttribute("data-clicked", "o");
      removeLogoOnTurn();
      addLogo_X_OnTurn(); 
    }
  };


  /////////////////////////////////////////////////////////////////////


  const toCompleteTrisAndEdgeTris = function(chiave, condition, startIndex, endIndex) {

    const arrObj = renderArrGameGrid().slice(startIndex, endIndex);

    for(let i = 0; i < arrObj.length; i ++){

      let z = 0;
      let position = 0;
      const values = [];

      for(const [key, value] of Object.entries(arrObj[i])) {  

          if(value !== "") {
              values.push(value);
              z++;
          }
          if(value === "") position = key;
      }
        
      if(chiave && z === 2 && values[0] === values[1] && condition(values[0], dataPlayer.player)) {
        // console.log("-------------------------------------");
        // console.log("partito if 1");
        // console.log(startIndex, endIndex);
        // console.log("arrObj[i] : " + Object.entries(arrObj[i]));
        // console.log("values : " + values);
        // console.log("value !== player : " + values[0] !== dataPlayer.player);
        // console.log("value === player : " + values[0] === dataPlayer.player);
          
        chiave = false;
        const val = dataPlayer.player === "x" ? "o" : "x";
        const el = [...box][position];
        addLogoOnGridClick(el, val);
        el.setAttribute("data-clicked", val);
        removeLogoOnTurn();
        dataPlayer.player === "x" ? addLogo_X_OnTurn() : addLogo_O_OnTurn();
        z = 0;
        position = 0;
        break;
      }
      
    }
    return chiave;
  }


  const toFillN_S_W_E = function(chiave) {

    const arrObj = renderArrGameGrid().slice(3,5);
    const val = dataPlayer.player === "x" ? "o" : "x";

    for(let i = 0; i < arrObj.length; i++) {

      const key_1 = Object.values(arrObj[i]).length === 3;
      const key_2 = Object.values(arrObj[i])[0] === Object.values(arrObj[i])[2];
      const key_3 = Object.values(arrObj[i])[0] === dataPlayer.player;
      const key_4 = Object.values(arrObj[i])[1] === val;
      
      if(chiave && key_1 && key_2 && key_3 && key_4) {
        // console.log("Partito l'if toFillN_S_W_E");

        const empty = [box[1], box[3], box[5], box[7]].filter( el => el.getAttribute("data-clicked") === "");
        const random = Math.floor(Math.random() * empty.length);

        const el = empty[random];
        addLogoOnGridClick(el, val);
        el.setAttribute("data-clicked", val);
        removeLogoOnTurn();
        dataPlayer.player === "x" ? addLogo_X_OnTurn() : addLogo_O_OnTurn();
        chiave = false;
      }
    }
    return chiave;
  }


  const toFillTheMiddle = function(chiave) {

    if(chiave && [...box][4].getAttribute("data-clicked") === "") {
      // console.log("Partito l'if toFillTheMiddle");
  
        const val = dataPlayer.player === "x" ? "o" : "x";
        const el = [...box][4];
        addLogoOnGridClick(el, val);
        el.setAttribute("data-clicked", val);
        removeLogoOnTurn();
        dataPlayer.player === "x" ? addLogo_X_OnTurn() : addLogo_O_OnTurn();
        chiave = false;
      }
    return chiave;
  }


  const toFillCorner = function(chiave) {

    if(chiave) {
      // console.log("Partito l'if firstMoveFillCorner");

      const empty = [box[0], box[2], box[6], box[8]].filter( el => el.getAttribute("data-clicked") === "");
      const random = Math.floor(Math.random() * empty.length);

      const val = dataPlayer.player === "x" ? "o" : "x";
      const el = empty[random];
      addLogoOnGridClick(el, val);
      el.setAttribute("data-clicked", val);
      removeLogoOnTurn();
      dataPlayer.player === "x" ? addLogo_X_OnTurn() : addLogo_O_OnTurn();
      chiave = false;
    }
    return chiave;
  }


  const randomFillLeftOver = function(chiave) {

    if(chiave) {
      // console.log("Partito l'if randomFillLeftOver");

      const empty = [...box].filter( el => el.getAttribute("data-clicked") === "");
      const random = Math.floor(Math.random() * empty.length);

      const val = dataPlayer.player === "x" ? "o" : "x";
      const el = empty[random];
      addLogoOnGridClick(el, val);
      el.setAttribute("data-clicked", val);
      removeLogoOnTurn();
      dataPlayer.player === "x" ? addLogo_X_OnTurn() : addLogo_O_OnTurn();
    }
  }


  function setActionCpu() {

    let chiave = true;

    // For Tris
    chiave = toCompleteTrisAndEdgeTris(chiave, (value, player) => value !== player, 0, 8);

    chiave = toCompleteTrisAndEdgeTris(chiave, (value, player) => value === player, 0, 8);

    // For Edges
    chiave = toCompleteTrisAndEdgeTris(chiave, (value, player) => value !== player, 8, 20);

    chiave = toCompleteTrisAndEdgeTris(chiave, (value, player) => value === player, 8, 20);

    // Others
    chiave = toFillN_S_W_E(chiave);

    chiave = toFillTheMiddle(chiave);

    chiave = toFillCorner(chiave);

    randomFillLeftOver(chiave);
    
  };


  const firstMoveCpu = function() {

    const check = [...box].filter( el => el.getAttribute("data-clicked") !== "").length;

    if(check === 0 && dataPlayer.opponent === "cpu" && dataPlayer.player === "o") {
      const empty = [box[0], box[2], box[6], box[8]].filter( el => el.getAttribute("data-clicked") === "");
      const random = Math.floor(Math.random() * empty.length);

      const val = "x";
      const el = empty[random];
      addLogoOnGridClick(el, val);
      el.setAttribute("data-clicked", val);
      removeLogoOnTurn();
      addLogo_O_OnTurn();
      x_o_Toggler = false;
    }
  }

  firstMoveCpu();

/////////////////////////////////////////////////////////////////////////

  function  mouseOver(e) {
    e.preventDefault();

    if(keyTimeout && e.target.getAttribute("data-clicked") === "") {
       addLogoOnGridHover(e.target, iconBox.getAttribute("data-store"));
    }
  };

  function mouseOut(e) {
    e.preventDefault();

    if(keyTimeout && e.target.getAttribute("data-clicked") === "") {
      e.target.innerHTML = "";
   } 
  };


  [...box].forEach( el => el.addEventListener("mouseover", mouseOver));

  [...box].forEach( el => el.addEventListener("mouseout", mouseOut));


  [...box].forEach( el => {

     el.addEventListener("click", function(e) {
      e.preventDefault();

      el.removeEventListener("mouseout", mouseOut);
      el.removeEventListener("mouseover", mouseOver);
      if(el.getAttribute("data-clicked") === "") el.innerHTML = "";

      if(dataPlayer.opponent === "p2") {
        setActionsOnClick(el);
        checkWin();
      }

      if(keyTimeout && dataPlayer.opponent === "cpu" && el.getAttribute("data-clicked") === "") {
        setActionsOnClick(el);
        keyTimeout = false;
        
        setTimeout( () => {

          if([...box].filter(element => element.getAttribute("data-clicked") === "").length !== 0) setActionCpu();
          checkWin();
          keyTimeout = true;
        }, 300);
      }
      
     })
  });


  restart.addEventListener("click", function(e){
    e.preventDefault();

    setRestartFeatures();
  });


  quit.addEventListener("click", function(e) {
    e.preventDefault();

    if(quit.innerHTML === "NO, CANCEL") setMessageDefaultSettings();
    else window.location.href = "index.html";   
  });


  nextRound.addEventListener("click", function(e) {
    e.preventDefault();

    removeLogoOnTurn();
    addLogo_X_OnTurn();

    [...box].forEach( el => el.innerHTML = "" );
    [...box].forEach( el => el.setAttribute("data-clicked", "") );

    x_o_Toggler = true;

    if(dataPlayer.opponent === "cpu") firstMoveCpu();

    if(nextRound.innerHTML === "YES, RESTART") {
       
       resX.innerHTML = "0";
       resO.innerHTML = "0";
       resTie.innerHTML = "0"; 
    }

    setMessageDefaultSettings();
    [...box].forEach( el => el.addEventListener("mouseover", mouseOver));
    [...box].forEach( el => el.addEventListener("mouseout", mouseOut));
  });


/////////////////////  TOUCH ///////////////////

  [...box].forEach( el => {

    el.addEventListener("touchstart", function(e) {

    el.removeEventListener("mouseout", mouseOut);
    el.removeEventListener("mouseover", mouseOver);
    if(el.getAttribute("data-clicked") === "") el.innerHTML = "";
    
    }, {passive: false})
  });


  restart.addEventListener("touchstart", function(){
    restart.style.backgroundColor = "#DBE8ED";
  }, {passive: false});

  restart.addEventListener("touchend", function(){
    restart.style.backgroundColor = "#A8BFC9";
  }, {passive: false});



  quit.addEventListener("touchstart", function(e) {

    quit.style.backgroundColor = "#DBE8ED";   
  }, {passive: false});

  quit.addEventListener("touchend", function(e) {

    quit.style.backgroundColor = "#A8BFC9";   
  }, {passive: false});



  nextRound.addEventListener("touchstart", function(e) {
       
    nextRound.style.backgroundColor = "#FFC860";
  }, {passive: false});

  nextRound.addEventListener("touchend", function(e) {

    nextRound.style.backgroundColor = "#F2B137";
  }, {passive: false});



  document.body.addEventListener('touchmove', (e) => {
    
    // Questo blocca il refresh della pagina
    document.body.style.overscrollBehavior = "none";
    // Questo mantiene lo scroll nonostante il refresh sia deattivato
    document.body.style.overflow = "auto";
    
  }, { passive: false });
