var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}



function CustomAlert(){
   this.render = function(dialog){
       var winW = window.innerWidth;
       var winH = window.innerHeight;
       var dialogoverlay = document.getElementById('dialogoverlay');
       var dialogbox = document.getElementById('dialogbox');
       dialogoverlay.style.display = "block";
       dialogoverlay.style.height = winH+"px";
       dialogbox.style.left = (winW/2) - (550 * .5)+"px";
       dialogbox.style.top = "100px";
       dialogbox.style.display = "block";
       document.getElementById('dialogboxhead').innerHTML = "";
       document.getElementById('dialogboxbody').innerHTML = dialog;
       document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">#send</button>';
   }
  this.ok = function(){
     document.getElementById('dialogbox').style.display = "none";
     document.getElementById('dialogoverlay').style.display = "none";
  }
}
var Alert = new CustomAlert();

