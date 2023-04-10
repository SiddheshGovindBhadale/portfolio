let steps = document.getElementById("steps")
let disTitle = document.getElementById("disTitle")
let disText = document.getElementById("disText")
showData()

function showData() {
    let localData = localStorage.getItem("project_id");
    let user_id = JSON.parse(localData);
    let stepsData = ""

    /*get request*/
    fetch(`http://localhost:3000/trackProjectid/${user_id}`)
        .then(res => res.json())
        .then(data => {
            let myData = data.data.data
            myData.forEach((item, index) => {
                stepsData += `
                    <li onclick="changeText('${item.stepName}','${item.projectDis}')">
                        <i class="${item.icon}"></i>
                        <div class="progress one${index + 1} ${item.status == "true" ? "active" : ""}">
                            <p>${index + 1}</p>
                            <i class="uil uil-check"></i>
                        </div>
                        <p class="text">${item.stepName}</p>
                    </li>
               `

                if (item.inProcess == 'true') {
                    disTitle.innerText = item.stepName
                    disText.innerText = item.projectDis
                }
            })
            steps.innerHTML = stepsData
        })
        .catch((e) => {
            console.log(e)
        })
}

let changeText = function (myDisTitle, myText) {
    disTitle.innerText = myDisTitle
    disText.innerText = myText
}