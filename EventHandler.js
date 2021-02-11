var btn1 = document.querySelector("#btn1");
//var objective = document.querySelector("#Objective1");

btn1.addEventListener("click", function(){
    document.getElementById("Objective1").style.backgroundColor = "purple";
    
});



// var btn2 = document.querySelector("btn2");
// var exp = document.querySelector("#Expereince1");
// btn2.addEventListener("click", function(){
//     exp.innerHTM = "<h1>Expereince section </h1>";
// });


var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(){
    document.getElementById("Experience1").innerHTML = "CODE EXPERIENCE";
    
});

var btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function() {
    document.getElementById("Skills1").innerText = "This is Skill"
});