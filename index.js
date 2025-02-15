// Top Score Initiation
const topScoreData = [
    {   
        rank : 1,
        name : 'AAA',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL6TBF6f4OmR3C6yj7pffvMkM13n9j6Prpg&s",
        score: 125,
    },
    {   
        rank : 2,
        name : 'BBB',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL6TBF6f4OmR3C6yj7pffvMkM13n9j6Prpg&s",
        score: 100,
    },
    {   
        rank : 3,
        name : 'CCC',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL6TBF6f4OmR3C6yj7pffvMkM13n9j6Prpg&s",
        score: 75,
    },
]

let board = ""

function getLocalLeaderBoard() {
    return JSON.parse(localStorage.getItem("leaderboard"))    
}

function setLocalUserData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
}

function getLeaderBoard() {
    let leaderboard = getLocalLeaderBoard()
    if (!leaderboard) {
        for (score of topScoreData) {
            
            board += `<div class="top-scorer">
                    <p>${score.rank}</p>
                    <img class="profil-pic" style="object-fit: cover;" src="${score.imageUrl}" alt="">
                    <div>
                        <p style="color: #d66b11;">${score.name}</p>
                        <p class="text-md text-neutral">Score : <span class=" text-xl">${score.score} pts</span></p>
                    </div>
                </div>`
        }
        let container_score = document.getElementById("leader_board")

        container_score.innerHTML = board
    }
}
getLeaderBoard()

function getLocalUserData() {
    return JSON.parse(localStorage.getItem("userData"))
}

function showLogin() {
    let form = document.getElementById("homepage-form")
    form.innerHTML = `<div><img src="./assets/images/title.png" alt="" id="title"></div>
                <h1 class="text-2xl mb-2">LOGIN</h1>
                <!-- <a href="./assets/pages/main.html"><button id="play-btn">PLAY GAME</button></a>  -->
                <label class="form-control w-full max-w-xs">
                    <div id="namelogin" class="label" style="display: flex; flex-direction: column; align-items: start;">
                      <span class="label-text text-md text-neutral">Your Username?</span>
                    </div>
                    <input id="userName" required type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />
                </label>

                <label class="form-control w-full max-w-xs">
                    <div id="passlogin" class="label" style="display: flex; flex-direction: column; align-items: start;">
                      <span class="label-text text-md text-neutral">Your password?</span>
                    </div>
                    <input id="userPassword" required type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />
                </label>

                <button onclick="login()" type="button" class="mt-6" id="play-btn" style="text-shadow: 0.5px 0.2px white;">SIGN IN</button>

                <div class="flex items-center justify-between mt-4">
                    <p class="text-sm text-neutral">
                      No account?  
                      <button onclick="showRegister()" style="margin-left: 5px; text-shadow: 0.5px 0.2px white;" class="text-sm underline"> 
                        Sign up
                    </button>
                    </p>
                </div>`
}
showLogin()

function showRegister() {
    let form = document.getElementById("homepage-form")
    form.innerHTML = `<div><img src="./assets/images/title.png" alt="" id="title"></div>
<h1 class="text-2xl mb-2">SIGN UP FIRST!</h1>
<!-- <a href="./assets/pages/main.html"><button id="play-btn">PLAY GAME</button></a>  -->
<label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text text-md text-neutral">Your Username?</span>
    </div>
    <input id="userName" required type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />
</label>

<label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text text-md text-neutral">Your Image Url?</span>
    </div>
    <input id="userImage" required type="url" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />
</label>

<label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text text-md text-neutral">Your password?</span>
    </div>
    <input id="userPassword" required type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />
</label>
<div class="form-control w-full max-w-xs flex items-center mb-4" >
    <button onclick="addUser()" type="button" class="mt-6" id="play-btn" style="text-shadow: 0.5px 0.2px white;">SIGN UP</a> 
</div>
<div class="form-control w-full max-w-xs">
    <div ="flex items-center justify-between mt-6">
        <p class="text-sm text-neutral">
        Already have an account?  
        <button onclick="showLogin()" style="margin-left: 5px; text-shadow: 0.5px 0.2px white;" class="text-sm underline"> 
            Sign in
        </button>
        </p>
    </div>
</div>`
}

let userLogin = {};
function login() {
    console.log(data);
    let nameInput = document.getElementById("userName")
    let passwordInput = document.getElementById("userPassword")
    

    for (user of data) {
        if (user.name === nameInput.value) {
            if(user.password === passwordInput.value) {
                window.location.href = "./assets/pages/profile.html"
                break;
            } else {
                let columnPass = document.getElementById("passlogin")
                columnPass.innerHTML = `<span class="label-text text-md text-neutral">Your password?</span>
                                <span class="label-text text-md text-red-600"><i>Invalid password</i></span>`
                break;
            }
        } 
        console.log(nameInput.value);
        
        let columnName = document.getElementById("namelogin")
        columnName.innerHTML = `<span class="label-text text-md text-neutral">Your Username?</span>
                            <span class="label-text text-md text-red-600"><i>username not available</i></span>`

    }
}

function addUser() { 
    let nameInput = document.getElementById("userName")
    let imageUrlInput = document.getElementById("userImage")
    let passwordInput = document.getElementById("userPassword")
    let id = 1

    console.log(nameInput)
    console.log(imageUrlInput)
    console.log(passwordInput)

    let nameAvailable = true 

    if (data.length > 0) {
        id = data[data.length - 1].id + 1
    }

    for (user of data) {
        if (user.name.toLowerCase() === nameInput.value.toLowerCase()) {
            nameAvailable = false
            break;
        }
    }
    
    if (!nameAvailable) {
        document.getElementById("username").innerHTML = `<div class="label" style="display: flex; flex-direction: column; align-items: start;">
                  <span class="label-text text-md text-neutral">Your Username?</span>
                  <span class="label-text text-md text-red-700"><i>Username already registered</i></span>
                </div>
                <input required type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-white" />`
    } else {
        let tempObj = {
            id: id,
            name: nameInput.value,
            image: imageUrlInput.value,
            password: passwordInput.value
        }

        data.push(tempObj)

        setLocalUserData(data)

        nameInput.value = ""
        imageUrlInput.value = ""
        passwordInput.value = ""

        showLogin()
    }

}

let data = getLocalUserData();
if (!data) {
    showRegister()
    data = []
}



