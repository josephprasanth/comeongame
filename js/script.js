var hot = document.getElementsByClassName('hot');
var fresh = document.getElementsByClassName('fresh');

var tabTotal = 3;
var iconTotal = 6;
var infoTotal = 6;

var icon_height = document.getElementById("icon1").offsetWidth;
var icon_height_active = icon_height + 20;

document.addEventListener("DOMContentLoaded", function(event) {
for(i=1; i<=iconTotal; i++) {
document.getElementById("icon"+i).style.height = icon_height + "px";
}
});

function select_tab(num) {
  for(i=1;i<=tabTotal;i++){
    document.getElementById("tab"+i).classList.remove("active");
  }
  document.getElementById("tab"+num).classList.add("active");

  for(i=1;i<=iconTotal;i++){
    document.getElementById("icon"+i).classList.remove("active");
    document.getElementById("icon"+i).style.height = icon_height+"px";
  }
  for(i=1;i<=infoTotal;i++){
    document.getElementById("info"+i).style.display="none";
    document.getElementById("info"+i).style.opacity="0";

  }


  if(num==2){
    //alert('hot')
    for(var i=0; i<hot.length; i++) {
       hot[i].style.display='inline-block';
    }
    for(var i=0; i<fresh.length; i++) {
       fresh[i].style.display='none';
    }
  }
  if(num==3){
     //alert('fresh')
     for(var i=0; i<hot.length; i++) {
       hot[i].style.display='none';
     }
     for(var i=0; i<fresh.length; i++) {
       fresh[i].style.display='inline-block';
     }
  }
  if(num==1) {
    for(var i=0; i<hot.length; i++) {
      hot[i].style.display='inline-block';
    }
    for(var i=0; i<fresh.length; i++) {
       fresh[i].style.display='inline-block';
    }
  }
}





function select_game(num) {
  for(i=1;i<=iconTotal;i++){
    document.getElementById("icon"+i).classList.remove("active");
    document.getElementById("icon"+i).style.height = icon_height+"px";
    document.getElementById("info"+i).style.display="none";
    document.getElementById("info"+i).style.opacity="0";
      }

  document.getElementById("info"+num).style.display="block";
  document.getElementById("info"+num).style.opacity="1";
  document.getElementById("icon"+num).classList.add("active");
  document.getElementById("icon"+num).style.height = icon_height_active+"px";
  }

function close_info() {
  for(i=1;i<=iconTotal;i++){
    document.getElementById("icon"+i).classList.remove("active");
    document.getElementById("icon"+i).style.height = icon_height+"px"
      document.getElementById("info"+i).style.display="none";
    document.getElementById("info"+i).style.opacity=0;

  }
}
