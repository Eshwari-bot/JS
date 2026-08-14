let students=[];
//target input tags

let stdidelement=document.getElementById("id")
let stdnameelement=document.getElementById("name")
let stdcourseelement=document.getElementById("course")
let stdfeeselement=document.getElementById("fees")

let btn=document.getElementById("addstddetails")

let displaystddetails=document.getElementById("displaystddetails")

btn.addEventListener("click",()=>{
    if(stdidelement.value==""||stdnameelement.value==""||stdcourseelement.value==""||stdfeeselement.value==""){
        alert("Please enter the values")
        return;
    }
})
