const loadingScreen = document.getElementById("loadingScreen");
const gameScreen = document.getElementById("gameScreen");
const startButton = document.getElementById("startButton");

const nextButton = document.getElementById("nextButton");
const dialogueText = document.getElementById("dialogueText");

const giftButton = document.getElementById("giftButton");
const giftBox = document.getElementById("giftBox");
const progressBar = document.getElementById("progressBar");
const giftText = document.getElementById("giftText");

const memeButton = document.getElementById("memeButton");
const memeBox = document.getElementById("memeBox");
const memeText = document.getElementById("memeText");
const bgMusic = document.getElementById("bgMusic");

const lines = [
    "Loading save file...",
    "Checking birthday levels...",
    "Player found...",
    "DIVYANSH",
    "Level: 15",
    "Achievement: Professional Goober.",
    "Mission: Have the BEST birthday ever. 🎂"
];

let current = 0;

startButton.onclick = function(){

    loadingScreen.style.display = "none";
    gameScreen.style.display = "flex";

    bgMusic.play().catch(function(error){

        console.log("Music blocked:", error);

    });

    setTimeout(function(){

        document.querySelector("#gameScreen h2").classList.add("glitch");

    },3000);

};

nextButton.onclick = function(){

    current++;

    if(current >= lines.length){
        current = lines.length - 1;
    }

    dialogueText.textContent = lines[current];

};
giftButton.onclick = function(){

    giftBox.style.display = "block";

    progressBar.style.width = "0%";

    giftText.innerHTML = "Opening present...";

    let progress = 0;

    const interval = setInterval(function(){

        progress += 5;

        progressBar.style.width = progress + "%";

        if(progress >= 100){

            clearInterval(interval);

            giftText.innerHTML = `
🎉 LEGENDARY ITEM OBTAINED!<br><br>

🍰 Infinite Birthday Cake<br>
⭐ +999 Luck<br>
❤️ One Overpowered Birthday Wish<br>
😂 Professional Goober Certificate<br><br>

Happy 15th Birthday Divyansh!!
`;

        }

    },80);

};
const memes = [

"🏆 Achievement Unlocked<br><br>Professional Goober",

"🏆 ERROR 404<br><br>Maturity Not Found",

"🎂 Birthday Buff Activated<br><br>+999 Luck",

"💀 Braincells Remaining:<br><br>2",

"🍰 Cake Consumption<br><br>100%",

"🌱 Grass Touching Status:<br><br>Unverified",

"😴 Sleep Schedule:<br><br>Destroyed",

"📚 Homework Escaped Successfully",

"🎮 OMORI Fan Level:<br><br>MAX",

"❤️ Best Boyfriend DLC Installed"

];

memeButton.onclick = function(){

    giftBox.style.display = "none";

    memeBox.style.display = "block";

    memeText.innerHTML = memes[Math.floor(Math.random()*memes.length)];

};
function screenGlitch(){

    document.body.classList.add("screen-glitch");

    setTimeout(function(){

        document.body.classList.remove("screen-glitch");

    },150);

}


setInterval(function(){

    if(Math.random() < 0.15){

        screenGlitch();

    }

},5000);
document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === "o"){

        alert("🌙 You found a secret! OMORI Birthday Mode Activated.");

    }

});
let konamiCode = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a"
];

let konamiIndex = 0;


document.addEventListener("keydown", function(event){

    if(event.key.toLowerCase() === konamiCode[konamiIndex]){

        konamiIndex++;

        if(konamiIndex === konamiCode.length){

            alert("🌟 SECRET ACHIEVEMENT UNLOCKED!\n\n🎂 Divyansh Birthday Developer Mode Activated!");

            konamiIndex = 0;

        }

    } else {

        konamiIndex = 0;

    }

});