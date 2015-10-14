
var hexToR = function(h){
   return parseInt((cutHex(h)).substring(0,2),16);
};

var hexToG = function(h){
   return parseInt((cutHex(h)).substring(2,4),16);
};

var hexToB = function(h){
   return parseInt((cutHex(h)).substring(4,6),16);
};

var cutHex = function(h){
   return (h.charAt(0)=="#") ? h.substring(1,7):h;
};

var keyCodeToHex = function(keyCode){
   CHARS = {
      "48":"0",
      "49":"1",
      "50":"2",
      "51":"3",
      "52":"4",
      "53":"5",
      "54":"6",
      "55":"7",
      "56":"8",
      "57":"9",
      "97":"a",
      "98":"b",
      "99":"c",
      "100":"d",
      "101":"e",
      "102":"f",
      "65":"A",
      "66":"B",
      "67":"C",
      "68":"D",
      "69":"E",
      "70":"F",
      "35":"#"
   };
   
   var regExp = new RegExp(/![0-9a-fA-F#]/);
   
   return (regExp.test(keyCode) ? CHARS[keyCode] : "");
}

window.onresize = function(){
   $("body").css('height',  $(window).height());
   $("body").css('width', $(window).width());
}

window.onload = function(){
   var hexString = "";
   
   document.body.style.overflow = "hidden";
   var viewportWidth = $(window).width();
   var viewportHeight = $(window).height();
   
   $("body").css('height', viewportHeight);
   $("body").css('width', viewportWidth);
   
   console.log(viewportWidth + "x" + viewportHeight);
   
   $("#hex").on("keyup", function(e){
      var hexRegEx = new RegExp(/#(?:[0-9a-fA-F]{3}){1,2}/);
   
      var hex = $("#hex").val();
      
      if(hex + "x" == "x"){
         console.log("Empty");
         $("#canvas").css('backgroundColor',"#284");
      }
      
      console.log(hex, e.keyCode);
   });
   
   R = hexToR("#FFFFFF");
   G = hexToG("#FFFFFF");
   B = hexToB("#FFFFFF");

}