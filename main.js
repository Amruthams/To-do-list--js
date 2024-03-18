
const inputBox=document.getElementById("inputbox")
const list=document.getElementById("list")

function addTask(){
    if(inputBox.value=== ''){
        alert("You must write something")
    }else{
        let li = document.createElement("li");  //create html element
        li.innerHTML =inputBox.value; //get data
        list.appendChild(li); //display

        //delete cross icon
        let span =document.createElement("span")
        span.innerHTML="\u00d7"  //\u00d7 is code for cross icon
        li.appendChild(span) //display



    }
    //refresh
    inputBox.value="";
    saveData();  //save new data
}


// for checked and delete

list.addEventListener("click",function(e){  // event click
    //for checked
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData(); //save updated data
    }
    //for delete cross
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); //save updated data

    }
   
},false);

//to store in local storage

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

//to display when open
function showTsak(){
    list.innerHTML= localStorage.getItem("data");
}
showTsak();

