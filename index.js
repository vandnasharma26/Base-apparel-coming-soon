document.getElementById("email").addEventListener("click",function(){
  document.getElementById("email").value="";
})

function check(val){
  if(!val.includes("@")){
    document.getElementById("alert").textContent = "Please provide a valid email !";
    document.getElementById("error").setAttribute("src","images/icon-error.svg");
    document.getElementById("alert").style.marginTop = "-40px";
    document.getElementById("email").style.border = "2px solid hsl(0, 93%, 68%)";
  }
  else {
    document.getElementById("alert").textContent = "";
    document.getElementById("error").setAttribute("src","");
    document.getElementById("email").style.border = "1.5px solid hsl(0, 36%, 70%,0.5)";
  }
}
