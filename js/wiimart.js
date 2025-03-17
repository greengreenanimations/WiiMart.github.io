//var SNDover = new Audio("/sound/wiishopsounds/2.wav"); causing too much lag (for some reason)
var SNDclick = new Audio("/sound/wiishopsounds/3.wav");
function initloading() {
    document.getElementById("wiishoploadingicon").style.display="block";
    setTimeout(stoploading,2500); // if page dont load past this point loader stops xD
    document.getElementById("loadingsound").play();
    document.getElementById("loadingsound").currentTime = 0;
}

function stoploading() {
    document.getElementById("wiishoploadingicon").style.display="none";
    document.getElementById("loadingsound").pause();
}



    function startBGM() {
        SNDclick.play();
    }

    function overobject() {
        var SNDover2 = new Audio("/sound/wiishopsounds/2.wav");
        SNDover2.play();
    }

    function clickobject() {
        var SNDclick2 = new Audio("/sound/wiishopsounds/3.wav");
        SNDclick2.play();
    }

    function keyboardopensound() {
      var SNDKBD = new Audio("/sound/wiikbd4.wav");
      SNDKBD.play();
    }

    function points() {
      var SNDwiipointadded = new Audio("/sound/wiishopsounds/7.wav");
      SNDwiipointadded.play();
  }


    function playBGM() {
      var BGMintro = new Audio("/music/shop_bgm_intro.wav");
      BGMintro.play();
      setTimeout(playBGMloop,6500);
      }
      
      function playBGMloop() {
          var BGMmain = new Audio("/music/shop_bgm_loop.wav");
          BGMmain.play();
          BGMmain.loop=true;
          }
