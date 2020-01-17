document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.width = "350px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.backgroundImage = "";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".3";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.boxShadow = "10px 10px 5px grey";

})

document.getElementById("button5").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundImage = "linear-gradient(red, blue)";
    
})

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.borderRadius = "25px";

})

document.getElementById("button7").addEventListener("click", function(){

    document.getElementById("box").style.width = "250px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = ".6";
    document.getElementById("box").style.boxShadow = "";
    document.getElementById("box").style.backgroundImage = "";
    document.getElementById("box").style.borderRadius = "";

});