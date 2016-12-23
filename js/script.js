$(document).ready(function() {

    var images = ["1.jpg", "2.jpg", "3.jpg"];
    $("#home").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});


        
        
    $(function() {
      $('#slides').slidesjs({
        width: 960,
        height: 400,
        navigation: {
            active: true,
            effect: "slide"
        }
      });
    });
    
    
    
    
});

