let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener('click', function () {
    addtaskinputvalue = addtaskinput.value;
    if (addtaskinputvalue.trim() != 0) {

        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {

            taskobj = [];

        } else {

            taskobj = JSON.parse(webtask)
        }
        taskobj.push(addtaskinputvalue);
        
        localStorage.setItem("localtask", JSON.stringify(taskobj));
        showtask();
    }



});



function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {

        taskobj = [];

    } else {

        taskobj = JSON.parse(webtask)
    }

    let html = ' ';

    let addtasklist = document.getElementById("addedtasklist");
    taskobj.forEach((item, index) => {
        html += `
        <tr>
        <th scope="row">${index}</th>
        <td>${item}</td>
        <td><button type="button" onclick=edittask(${index}) class="text-primary"><i class="fa fa-edit"></i>Edit</button>
        </td>
        <td><button type="button" onclick=deletetask(${index}) class="text-danger"><i class="fa fa-trash"></i>Delete</button>
        </td>

    </tr>`;

    });

    console.log("aarman..........", addtasklist.innerHTML = html);
}


function edittask(index) {
    let addtaskbtn = document.getElementById("addtaskbtn");
    let saveindex = document.getElementById("saveindex");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;

    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    // to get the value and move in to table
    addtaskinput.value = taskobj[index];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}


// delete task

function deletetask(index){
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskobj));

    showtask();
}
//delete all btn


let deleteallbtn = document.getElementById("deleteallbtn");

deleteallbtn.addEventListener('click',function(){
    
let savetaskbtn = document.getElementById("savetaskbtn");
let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);

    if(webtask == null){
        taskobj = [];

    }else{
        taskobj = JSON.parse(webtask);
        taskobj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    addtaskinput.value = " ";


    localStorage.setItem("localtask",JSON.stringify(taskobj));

    showtask();



});



//save task

let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener('click',function(){
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskobj[saveindex] = addtaskinput.value;
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    addtaskinput.value="";
    showtask();


});

//searchlist

let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener('input',function(){
let trlist = document.querySelectorAll("tr");
Array.from(trlist).forEach((item)=>{
let searchtext = item.getElementsByTagName("td")[0].innerText;
let searchvalue = searchtextbox.value;
let re = new RegExp(searchvalue, 'gi');

if(searchtext.match(re)){
    item.style.display="table-row";
    
}else{
    item.style.display="none";
}



});

});


