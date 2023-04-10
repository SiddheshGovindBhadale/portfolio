// import { verify } from './login.js';

// verify("../../seeAllProjects.html")

let boxes = document.getElementById("boxess")
showData()

function showData() {
    let localDataID = localStorage.getItem("user_id");
    let userID = JSON.parse(localDataID);

    let boxesData = ""
    let proccess = "Completed"
    
    /*get request*/
    fetch(`http://localhost:3000/trackProject/${userID}`)
        .then(res => res.json())
        .then(data => {
            let myData = data.data
            console.log(myData)
            myData.forEach((item, index) => {
                item.data.forEach((elem, index) => {
                    if(elem.inProcess == "true"){
                        proccess = elem.stepName 
                    }
                })

                boxesData += `
                <div class="box">
                    <span class="projects_small_heading">${item.status == true ? "Completed" : "Project In Progress"}</span>

                    <h2 class="projects_heading">
                        ${item.projectTitle}
                    </h2>
                    <p class="projects_para">
                        <strong>Project Starting Date :</strong> ${item.startingDate}
                    </p>
                    <p class="projects_para">
                        <strong>Project Submitted Date :</strong> ${item.submitedDate == "00-00-0000" ? "Project Not Submited yet" : item.submitedDate }
                    </p>
                    <p class="projects_para">
                        <strong>Project State :</strong> ${proccess}
                    </p>

                    <a href="#" id="${item._id}" class="projects_btn" onclick="storeProjectId(this.id)">
                        Track Progress
                    </a>
                </div>
               `

               
               proccess = "Completed"
            })
            
            boxes.innerHTML = boxesData
            if(myData.length == "0"){
                boxes.innerHTML = `<p style="padding-top:10px ; font-size:1.1rem; font-weidth:600;">No Any Project Updated Yet !!!</p>`
            }
        })
        .catch((e) => {
            console.log(e)
        })
}


let storeProjectId = (id) => {
    localStorage.setItem("project_id", JSON.stringify(id));
    window.location = "../../progress traker.html";
}