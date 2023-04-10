let SubmitBtn = document.getElementById("login")
let login_text_btn = document.getElementById("login_text_btn")
let myTrackProjectBtn = document.getElementById("myTrackProjectBtn")

let obj2 = {}
let submit = function () {
    // let compmpanyName = document.getElementById("email").value
    // let password = document.getElementById("password").value

    // let loginObj = {
    //     userId: compmpanyName,
    //     pass: password
    // };
    // // console.log('siddhesh')

    // localStorage.setItem("user", JSON.stringify(loginObj));

    // verify()

    // window.location = "../../index.html";

    alert("Invalid Details")
    window.location = "../../index.html";
}

verify = () => {
    let localData = localStorage.getItem("user");
    let user = JSON.parse(localData);

    if (user == null) {
        alert("Session Termineted")
        window.location = "../../index.html";
    } else {
        let obj2 = {
            comopanyName: user.userId,
            password: user.pass
        }

        // console.log(obj2)

        postData = function () {
            fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    obj2
                ),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.massage == 'login successfull.') {
                        localStorage.setItem("user_id", JSON.stringify(data.data));
                    }
                    else {
                        alert("Invalid User Details")
                        localStorage.clear();
                        window.location.reload();
                        window.location = "../../index.html";
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
        myTrackProjectBtn.innerHTML = `<a href="#" class="button4" onclick="logout()">
                                            <span class="my-portfolio" id="login_text_btn">Logout</span>
                                        </a>`
        your_projrcts.style.display = "block"


        postData()
        loade()
    }
}

change_nav_btn = () => {
    let localData = localStorage.getItem("user");
    let user = JSON.parse(localData);

    if (user == null) {
    } else {
        let obj2 = {
            comopanyName: user.userId,
            password: user.pass
        }

        // console.log(obj2)

        postData = function () {
            fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    obj2
                ),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.massage == 'login successfull.') {
                        localStorage.setItem("user_id", JSON.stringify(data.data));
                    }
                    else {
                        alert("Invalid User Details")
                        localStorage.clear();
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }

        postData()
        loade()

        myTrackProjectBtn.innerHTML = `<a href="#" class="button4" onclick="logout()">
                                            <span class="my-portfolio" id="login_text_btn">Logout</span>
                                        </a>`
        your_projrcts.style.display = "block"
    }
}


let logout = () => {

    localStorage.clear();
    window.location.reload();

}


let main = document.querySelector("#mains")

let timesRun = 0
function loade() {
    main.style.display = "block"
    const myInterval = setInterval(preloader, 1000);

    function preloader() {
        timesRun += 1;
        if (timesRun === 3) {
            main.style.display = "none"
            clearInterval(myInterval);
            timesRun = 0
        }
    }
}