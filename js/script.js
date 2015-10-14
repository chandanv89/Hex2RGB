
var getRed = function(h){
   return parseInt((cutHex(h)).substring(0,2),16);
};

var getGreen = function(h){
   return parseInt((cutHex(h)).substring(2,4),16);
};

var getBlue = function(h){
   return parseInt((cutHex(h)).substring(4,6),16);
};

var cutHex = function(h){
   return (h.charAt(0)=="#") ? h.substring(1,7):h;
};

var expand = function(hex){
   var expanded = "";
   
   for(var i=0; i<hex.length; i++){
      for(var j=0; j<2; j++){
         expanded += hex.charAt(i);
      }
   }
   
   return expanded || "";
}

var hexToRgb = function(hex){
   var rgb = "";
   
   hex = (hex.charAt(0)=="#") ? hex.substr(1,hex.length) : hex;
   
   if(hex.length == 3){
      hex = expand(hex);
   }
   
   var R = getRed(hex);
   var G = getGreen(hex);
   var B = getBlue(hex);

   rgb = "rgb(" + R + "," + G + "," + B + ")";
   
   return rgb;
}

var resetBackground = function(){
   $("#canvas").css('backgroundColor',"#284");
}

var setBackground = function(colorCode){
   if(colorCode.charAt(0)=="#")
      $("#canvas").css('backgroundColor', colorCode);
   else
      $("#canvas").css('backgroundColor', "#" + colorCode);
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
      var hexRegExp = new RegExp(/^#?(?:[0-9a-fA-F]{3}){1,2}$/);
   
      var hex = $("#hex").val();
      var rgb = "";
      
      if(hex + "x" == "x"){
         hexString = "";
         resetBackground();
      }
      
      if(hexRegExp.test(hex)){
         setBackground(hex);
         rgb = hexToRgb(hex);
         $("#rgb").val(rgb);
         console.log(hexToRgb(hex));
      }
      else{
         resetBackground();
      }
      
      console.log(hex);
   });
}