function register(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

localStorage.setItem("user",u)
localStorage.setItem("pass",p)
localStorage.setItem("balance",0)

alert("Account Created")

window.location="login.html"

}

function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u==localStorage.getItem("user") && p==localStorage.getItem("pass")){

window.location="dashboard.html"

}else{

alert("Wrong login")

}

}

function buyPlan(amount){

let bal=parseInt(localStorage.getItem("balance"))

if(bal>=amount){

bal-=amount
localStorage.setItem("balance",bal)

alert("Plan Activated")

}else{

alert("Not enough balance")

}

  }
